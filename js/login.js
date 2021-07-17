/* function direcionarTelaRecuperacaoDeSenha(){

} */

const EMAIL = "admin@admin.com";   
const SENHA = "123";

function logar(){
    let tempEmail = document.getElementById('email').value;
    let tempSenha = document.getElementById('senha').value;
    if(tempEmail.toLowerCase() == EMAIL && tempSenha == SENHA ){
        window.open("principal.html", "_self");
    } else{
        alert("Usuário ou Senha inválidos");
    }
}

//admin@admin.com
//123