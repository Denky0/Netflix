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
