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
  corporativo: "Atua em larga escala, com alta mecanização e exportação.",
  adminAgroProAI: "Administração do site.",
};

if (perfilSelect && tooltip) {
  perfilSelect.addEventListener("change", () => {
    const valor = perfilSelect.value;
    tooltip.textContent = perfisInfo[valor] || "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");

  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const perfilSelect = document.getElementById("perfilAgricultor");
  const senhaReq = document.getElementById("senha-requisitos");
  const msgContainer = document.getElementById("mensagens-validacao");

  // ====== Validação dinâmica da senha ======
  senhaInput.addEventListener("input", () => {
    const senha = senhaInput.value;

    if (senha.length === 0) {
      senhaReq.innerHTML = ""; // limpa a mensagem se estiver vazio
      return;
    }

    const min = senha.length >= 8;
    const maius = /[A-Z]/.test(senha);
    const minus = /[a-z]/.test(senha);
    const esp = /[^A-Za-z0-9]/.test(senha);

    senhaReq.innerHTML = `
    <div class="senha-req-grid">
      <div class="${
        min ? "requisito-ok" : "requisito-erro"
      }">• Mínimo 8 caracteres</div>
      <div class="${
        maius ? "requisito-ok" : "requisito-erro"
      }">• Uma letra maiúscula</div>
      <div class="${
        minus ? "requisito-ok" : "requisito-erro"
      }">• Uma letra minúscula</div>
      <div class="${
        esp ? "requisito-ok" : "requisito-erro"
      }">• Um caractere especial</div>
    </div>
  `;
  });

  // ====== Envio do formulário ======
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    msgContainer.innerHTML = ""; // limpa mensagens antigas

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();
    const perfil = perfilSelect.value;

    let erros = [];

    // Nome
    if (
      !nome ||
      nome.length < 5 ||
      nome.length > 25 ||
      !/^[A-Za-zÀ-ÿ\s]+$/.test(nome)
    ) {
      erros.push(
        "O nome deve ter entre 5 e 25 caracteres e conter apenas letras."
      );
    }

    // Email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      erros.push("Insira um e-mail válido.");
    }

    // Senha
    const min = senha.length >= 8;
    const maius = /[A-Z]/.test(senha);
    const minus = /[a-z]/.test(senha);
    const esp = /[^A-Za-z0-9]/.test(senha);

    if (!min || !maius || !minus || !esp) {
      erros.push("A senha não atende aos requisitos mínimos.");
    }

    // Perfil
    if (!perfil) {
      erros.push("Selecione um perfil de agricultor.");
    }

    // Exibir erros
    if (erros.length > 0) {
      erros.forEach((erro, index) => criarMensagem(erro, index));
      return;
    }

    // Sucesso
    criarMensagem("Registro realizado com sucesso!", 0, true);
    signupForm.reset();
    senhaReq.innerHTML = "";
  });

  // ====== Criar mensagem em toast ======
  function criarMensagem(texto, ordem, sucesso = false) {
    const msg = document.createElement("div");
    msg.className = `toast-msg ${sucesso ? "toast-sucesso" : "toast-erro"}`;
    msg.textContent = texto;

    msgContainer.appendChild(msg);

    // Duração: 5s + 0.5s por mensagem para evitar sumir tudo junto
    setTimeout(() => {
      msg.style.opacity = "0";
      msg.style.transform = "translateX(-20px)";
      setTimeout(() => msg.remove(), 500);
    }, 5000 + ordem * 500);
  }
});
