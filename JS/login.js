// ======== Alterna entre telas de Login e Cadastro ========
const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");
const body = document.querySelector("body");

if (btnSignin) {
  btnSignin.addEventListener("click", () => {
    body.className = "sign-in-js";
  });
}

if (btnSignup) {
  btnSignup.addEventListener("click", () => {
    body.className = "sign-up-js";
  });
}

// ======== Botão "X" — Volta à tela inicial ========
document.addEventListener("DOMContentLoaded", () => {
  const botoesFechar = document.querySelectorAll(".btnFechar");
  botoesFechar.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "index.html";
    });
  });
});

// ======== Tooltip: descrição do perfil de agricultor ========
const perfilSelect = document.getElementById("perfilAgricultor");
const tooltip = document.querySelector(".tooltip-info");

const perfisInfo = {
  tradicional: "Usa práticas agrícolas herdadas, com pouca tecnologia.",
  empreendedor: "Vê a fazenda como um negócio e investe em inovação.",
  tecnologico: "Adota agricultura de precisão, automação e dados.",
  sustentavel: "Prioriza práticas ecológicas e conservação ambiental.",
  familiar: "Baseado no trabalho familiar, voltado à subsistência.",
  corporativo: "Atua em larga escala, com alta mecanização e exportação."
};

if (perfilSelect && tooltip) {
  perfilSelect.addEventListener("change", () => {
    const valor = perfilSelect.value;
    tooltip.textContent = perfisInfo[valor] || "";
  });
}

// ======== Validação e Mensagens de Confirmação/Erro ========
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const signupMsg = document.getElementById("signup-message");

  if (signupForm && signupMsg) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value.trim();
      const perfil = document.getElementById("perfilAgricultor").value;

      // ===== Validações de regra de negócio =====
      if (!nome || !email || !senha || !perfil) {
        mostrarMensagem("Por favor, preencha todos os campos obrigatórios.", "erro", signupMsg);
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mostrarMensagem("Insira um e-mail válido.", "erro", signupMsg);
        return;
      }

      if (senha.length < 6) {
        mostrarMensagem("A senha deve ter no mínimo 6 caracteres.", "erro", signupMsg);
        return;
      }

      // ===== Caso tudo esteja certo =====
      mostrarMensagem("Registro realizado com sucesso!", "sucesso", signupMsg);
      signupForm.reset();
    });
  }

  // ===== Função utilitária =====
  function mostrarMensagem(texto, tipo, elemento) {
    elemento.innerHTML = `<i class="fa-solid ${tipo === "erro" ? "fa-circle-xmark" : "fa-circle-check"}"></i> ${texto}`;
    elemento.className = `mensagem ativa ${tipo}`;

    // Remove após 4 segundos
    setTimeout(() => {
      elemento.classList.remove("ativa");
    }, 4000);
  }
});
