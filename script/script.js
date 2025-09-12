// Função de
function entrar() {
    let senha = "123"
    let mail = "teste"
    let senhaDigitado = document.getElementById("password")
    let mailDigitado = document.getElementById("user")

    if (senhaDigitado.value == senha && mailDigitado.value == mail) {
        alert(`Bem vindo ${mail}`)
        window.location.href = "profile.html"
    } else {
        alert("Senha/Usuário Incorreto(a)!")
    }
}

// Utilizar o Enter para enviar os dados
const senhaInput = document.getElementById("password");
if (senhaInput) {
  senhaInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      entrar();
    }
  });
}

// Funcionalidade dos Cards dos Perfis
const cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    const url = cards[i].getAttribute("data-url");
    if (url) {
      window.location.href = url;
    }
  });
}

// Evento de quando clicar na caixa do perfil volta para o profile
const perfilImg = document.querySelector(".perfil img");
if (perfilImg) {
  perfilImg.addEventListener("click", () => {
    window.location.href = "profile.html";
  });
}

// Compartimento para barra de pesquisa
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

  // Fecha a barra de pesquisa ao clicar fora
  document.addEventListener("click", (event) => {
    if (pesquisa && !pesquisa.contains(event.target)) {
      pesquisa.classList.remove("ativa");
    }
  });
});

// Animação da barra de pesquisa
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navegate');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
