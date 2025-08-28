function entrar() {
    let senha = "5872"
    let mail = "teste@gmail.com"
    let senhaDigitado = document.getElementById("password")
    let mailDigitado = document.getElementById("user")

    if (senhaDigitado.value == senha && mailDigitado.value == mail) {
        alert(`Bem vindo ${mail}`)
        window.location.href = "profile.html"
    } else {
        alert("Senha/Usuário Incorreto(a)!")
    }
}

const card = document.getElementsByClassName("card");

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", () => {
    window.location.href = "home.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const pesquisa = document.getElementById("pesquisa");
  const icon = document.getElementById("pesquisa-icon");   
  const input = document.getElementById("pesquisa-input"); 

  icon.addEventListener("click", () => {
    pesquisa.classList.toggle("ativa");
    if (pesquisa.classList.contains("ativa")) {
      input.focus();
    }
  });
});
