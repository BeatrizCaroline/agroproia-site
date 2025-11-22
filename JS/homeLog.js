// --- Carrossel Automático ---
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === n);
    dots[i].classList.toggle("active", i === n);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

setInterval(nextSlide, 4000);

// --- Controle manual ---
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});

// --- Clima ---
const apiKey = '82ed26db0a82403e90d10708252211';
const searchInput = document.getElementById('search');
const autocompleteList = document.getElementById('autocomplete-list');
const resultadoClima = document.getElementById('resultado-clima');
const btnBuscar = document.getElementById('btnBuscar');
const btnLimpar = document.getElementById('btnLimpar');

let debounceTimer = null;

async function buscarCidades(query) {
  if (!query) {
    autocompleteList.innerHTML = '';
    return [];
  }
  const url = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${encodeURIComponent(query)}`;

  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    return data;
  } catch {
    return [];
  }
}

async function atualizarAutocomplete() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(async () => {
    const query = searchInput.value.trim();
    const cidades = await buscarCidades(query);

    autocompleteList.innerHTML = '';
    if (!cidades.length) return;

    cidades.forEach(cidade => {
      const li = document.createElement('li');
      li.textContent = `${cidade.name}, ${cidade.region}, ${cidade.country}`;
      li.addEventListener('click', () => {
        searchInput.value = li.textContent;
        autocompleteList.innerHTML = '';
        buscarClima(cidade.name);
      });
      autocompleteList.appendChild(li);
    });
  }, 400);
}

async function buscarClima(location) {
  resultadoClima.innerHTML = `<p>Carregando...</p>`;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&lang=pt`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Erro ao buscar clima');
    const data = await res.json();
    mostrarClima(data);
  } catch {
    resultadoClima.innerHTML = `<p>Erro ao carregar dados do clima.</p>`;
  }
}

function mostrarClima(data) {
  const c = data.current;
  resultadoClima.innerHTML = `
    <h3>${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
    <p><strong>${c.condition.text}</strong></p>
    <p>Temperatura: ${c.temp_c}°C</p>
    <p>Umidade: ${c.humidity}%</p>
    <p>Vento: ${c.wind_kph} km/h</p>
  `;
}

searchInput.addEventListener('input', atualizarAutocomplete);

btnBuscar.addEventListener('click', () => {
  const texto = searchInput.value.trim();
  if (!texto) return;
  buscarClima(texto);
});

btnLimpar.addEventListener('click', () => {
  searchInput.value = '';
  autocompleteList.innerHTML = '';
  resultadoClima.innerHTML = '<p>Pesquise uma região para visualizar as condições climáticas.</p>';
  searchInput.focus();
});

document.addEventListener('click', e => {
  if (!e.target.closest('.clima-container')) {
    autocompleteList.innerHTML = '';
  }
});
