function entrar() {
    let senha = "5872"
    let mail = "teste@gmail.com"
    let senhaDigitado = document.getElementById("password")
    let mailDigitado = document.getElementById("user")

    if (senhaDigitado.value == senha && mailDigitado.value == mail) {
        alert(`Bem vindo ${mail}`)
    } else {
        alert("Senha/Usuário Incorreto(a)!")
    }
}