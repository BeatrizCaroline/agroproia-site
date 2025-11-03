
// Botões de login/cadastro
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");

if (btnSignin) {
  btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js";
  });
}

if (btnSignup) {
  btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
  });
}

// Quando clicar no "X", vai para a tela de Home Deslogada
document.addEventListener("DOMContentLoaded", () => {
  const botoesFechar = document.querySelectorAll('#btnFechar');

  botoesFechar.forEach(botao => {
    botao.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "index.html";
    });
  });
});


