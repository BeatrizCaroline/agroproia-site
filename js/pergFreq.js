// Accordion (mostrar/ocultar respostas)
const questions = document.querySelectorAll(".faq-question");
questions.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const open = answer.style.display === "block";
    document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
    if (!open) answer.style.display = "block";
  });
});

// Lógica de seleção de categoria
const catButtons = document.querySelectorAll(".cat-btn");
const categories = document.querySelectorAll(".faq-category");

catButtons.forEach(button => {
  button.addEventListener("click", () => {
    catButtons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const selectedCat = button.dataset.cat;

    categories.forEach(sec => {
      sec.style.display = sec.dataset.category === selectedCat ? "block" : "none";
    });

    document.getElementById("searchBar").value = "";

    categories.forEach(sec => {
      if (sec.style.display === "block") {
        sec.querySelectorAll(".faq-item").forEach(item => item.style.display = "block");
      }
    });
  });
});

// Pesquisa de texto
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", () => {
  const term = searchBar.value.toLowerCase();

  categories.forEach(sec => {
    if (sec.style.display !== "none") {
      sec.querySelectorAll(".faq-item").forEach(item => {
        const text = item.querySelector(".faq-question").textContent.toLowerCase();
        item.style.display = text.includes(term) ? "block" : "none";
      });
    }
  });
});

// Dropdown (somente se existir no HTML)
const dropdownLink = document.querySelector(".dropdown > a");
if (dropdownLink) {
  dropdownLink.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle("open");
  });
}
