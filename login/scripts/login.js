function logar(){
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('password').value;

    if(login == "admin" && senha == "admin"){
        alert('sucesso');
        window.location.href = "../index.html";
    }else{
        alert('Usuário ou Senha Incorretos');
    }

}