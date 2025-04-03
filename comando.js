document.addEventListener("DOMContentLoaded", function () {
    let telaLogin = document.querySelector(".login-tela");
    let telaRegistro = document.querySelector(".tela-cadastro");
    let Registrar = document.querySelector(".registrar");
    let Voltar = document.querySelector(".voltar");
    let entrar = document.querySelector(".entrar");
    let elemento = document.querySelector(".tela-central-fotos");



    Registrar.addEventListener("click", function() {
        telaLogin.style.display = "none";
        elemento.style.display = "none";
        telaRegistro.style.display = "block";

    });

    Voltar.addEventListener("click", function() {

        telaRegistro.style.display = "none";
        elemento.style.display = "none";
        telaLogin.style.display = "block";
    });

    entrar.addEventListener("click", function(){
        telaRegistro.style.display = "none";
        telaLogin.style.display = "none";
        elemento.style.display = "block";
        document.body.style.setProperty(
            "--fundo-animado", 
            "linear-gradient(135deg,rgb(101, 0, 216),rgb(0, 174, 255),rgb(255, 0, 255))"
        );         
    });
});
