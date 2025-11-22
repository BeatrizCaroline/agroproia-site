document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("forgot-form");
  const msg = document.getElementById("forgot-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email-recuperacao").value.trim();

    if (email === "") {
      msg.style.color = "#dc3545";
      msg.textContent = "Por favor, insira um e-mail válido.";
      return;
    }

    // Simulação de envio de e-mail
    msg.style.color = "rgb(115, 192, 104)";
    msg.textContent =
      "Se o e-mail estiver cadastrado, enviaremos instruções para redefinir sua senha.";

    // Limpar campo após 2 segundos
    setTimeout(() => {
      form.reset();
    }, 2000);
  });
});