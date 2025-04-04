document.addEventListener("DOMContentLoaded", function () {
    const telaLogin = document.querySelector(".login-tela");
    const telaRegistro = document.querySelector(".tela-cadastro");
    const registrar = document.querySelector(".registrar");
    const voltar = document.querySelector(".voltar");
    const entrar = document.querySelector(".entrar");
    const fotos = document.querySelector(".tela-central-fotos");

    function esconder(elemento) {
        elemento.classList.add("hidden");
    }

    function mostrar(elemento) {
        setTimeout(() => {

            elemento.classList.remove("hidden");



        }, 300);
    }

    registrar.addEventListener("click", () => {
        esconder(telaLogin);
        esconder(fotos);
        mostrar(telaRegistro);
    });

    voltar.addEventListener("click", () => {
        esconder(telaRegistro);
        esconder(fotos);
        mostrar(telaLogin);
    });

    entrar.addEventListener("click", () => {
        esconder(telaRegistro);
        esconder(telaLogin);
        mostrar(fotos);
        document.body.style.setProperty(
            "--fundo-animado",
            "linear-gradient(135deg,rgb(34, 0, 73),rgb(37, 37, 37),rgb(104, 0, 104))"
        );
    });
});
