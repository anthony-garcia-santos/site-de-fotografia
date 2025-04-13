document.addEventListener("DOMContentLoaded", function () {
    const telaLogin = document.querySelector(".login-tela");
    const telaRegistro = document.querySelector(".tela-cadastro");
    const fotos = document.querySelector(".tela-central-fotos");
    const telainicial = document.querySelector(".tela-inicial");
    const registrar = document.querySelector(".registrar");
    const voltar = document.querySelector(".voltar");
    const entrar = document.querySelector(".entrar");
    const comecar = document.querySelector(".comecar");
    const home = document.querySelector(".HOME");
    const conectarse = document.querySelector(".CONECTE-SE");
    const increverse = document.querySelector(".INSCREVER-SE");

    const telas = [telaLogin, telaRegistro, fotos, telainicial];

    function esconderTodas() {
        telas.forEach(tela => tela.classList.add("hidden"));
    }

    function mostrar(tela) {
        esconderTodas();
        setTimeout(() => {
            tela.classList.remove("hidden");
        }, 300);
    }

    comecar.addEventListener("click", () => mostrar(telaLogin));
    registrar.addEventListener("click", () => mostrar(telaRegistro));
    voltar.addEventListener("click", () => mostrar(telaLogin));
    entrar.addEventListener("click", () => mostrar(fotos));
    home.addEventListener("click", () => mostrar(telainicial));
    conectarse.addEventListener("click", () => mostrar(telaLogin));
    increverse.addEventListener("click", () => mostrar(telaRegistro));
});