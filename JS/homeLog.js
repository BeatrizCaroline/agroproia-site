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

// --- Simulação de Clima ---
const btnBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado-clima");

btnBuscar.addEventListener("click", () => {
  const cidade = document.getElementById("search").value.trim();

  if (!cidade) {
    resultado.innerHTML = "<p>Por favor, insira o nome da cidade.</p>";
    return;
  }

  // Exemplo de resultado simulado
  resultado.innerHTML = `
    <h3>${cidade}</h3>
    <p>Temperatura: 27°C ☀️</p>
    <p>Umidade: 65%</p>
    <p>Condições: Ensolarado</p>
  `;
});

// Menu
document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const submenu = link.nextElementSibling;
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });
  });
