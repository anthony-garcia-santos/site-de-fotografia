document.addEventListener("DOMContentLoaded", function () {
    const telaLogin = document.querySelector(".login-tela");
    const telaRegistro = document.querySelector(".tela-cadastro");
    const registrar = document.querySelector(".registrar");
    const voltar = document.querySelector(".voltar");
    const entrar = document.querySelector(".entrar");
    const fotos = document.querySelector(".tela-central-fotos");
    const comecar = document.querySelector(".comecar");
    const telainicial = document.querySelector(".tela-inicial");
    
    function esconder(elemento) {
        elemento.classList.add("hidden");
    }

    function mostrar(elemento) {
        setTimeout(() => {

            elemento.classList.remove("hidden");



        }, 300);
    }




    comecar.addEventListener("click", () => {

        mostrar(telaLogin);
        esconder(fotos);
        esconder(telainicial);
        esconder(telaRegistro);

    });










    registrar.addEventListener("click", () => {
        esconder(telaLogin);
        esconder(fotos);
        esconder(telainicial);
        mostrar(telaRegistro);
    });

    voltar.addEventListener("click", () => {
        esconder(telaRegistro);
        esconder(fotos);
        esconder(telainicial);
        mostrar(telaLogin);
    });

    entrar.addEventListener("click", () => {
        esconder(telaRegistro);
        esconder(telaLogin);
        esconder(telainicial)
        mostrar(fotos);
    });
    function registrando(){


        const passw = document.getElementById("regpassword").value;
        const usuario = document.getElementById("regUsername").value;

        if(usuario,passw) {

            

            
            
        }
    }
});
