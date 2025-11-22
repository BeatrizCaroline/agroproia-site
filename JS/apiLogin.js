document.addEventListener("DOMContentLoaded", () => {
  const loginEmail = document.getElementById("login-email");
  const loginSenha = document.getElementById("login-senha");
  const btnLogin = document.getElementById("btn-login");
  const msgContainer = document.getElementById("mensagens-validacao");

  // Usuários fictícios (perfil não é necessário no login)
  const usuarios = [
    { email: "tradicional@email.com", senha: "Trad123!" },
    { email: "empreendedor@email.com", senha: "Empre456@" },
    { email: "tecnologico@email.com", senha: "Tecn789#" },
    { email: "sustentavel@email.com", senha: "Sustent!1" },
    { email: "familiar@email.com", senha: "Familia$2" },
    { email: "corporativo@email.com", senha: "Corp#345" },
    { email: "admin@agroproai.com", senha: "Admin!2025" },
  ];

  btnLogin.addEventListener("click", () => {
    msgContainer.innerHTML = "";

    const email = loginEmail.value.trim();
    const senha = loginSenha.value.trim();

    const erros = [];

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      erros.push("Informe um e-mail válido.");
    }

    if (!senha || senha.length < 6) {
      erros.push("Informe a senha com pelo menos 6 caracteres.");
    }

    if (erros.length > 0) {
      erros.forEach((erro, i) => criarMensagem(erro, i));
      return;
    }

    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (!usuarioEncontrado) {
      criarMensagem("E-mail ou senha incorretos.", 0);
      return;
    }

    // Login válido: redireciona
    window.location.href = "logada.html";
  });

  function criarMensagem(texto, ordem, sucesso = false) {
    const msg = document.createElement("div");
    msg.className = `toast-msg ${sucesso ? "toast-sucesso" : "toast-erro"}`;
    msg.textContent = texto;
    msg.style.marginTop = "10px";

    msgContainer.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = "0";
      msg.style.transform = "translateX(-20px)";
      setTimeout(() => msg.remove(), 500);
    }, 5000 + ordem * 500);
  }
});
