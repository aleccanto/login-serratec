function enviarEmail() {
    let email = document.getElementById("texto").value;
    if (email != "") {
        alert("E-mail de recuperação enviado!");
    } else {
        alert("Aconteceu um erro. Verifique o e-mail digitado.")
    }
}