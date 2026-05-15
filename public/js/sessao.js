
// Chamada nas páginas LIVRES (index, simulador)
// Só troca os botões se estiver logado, não redireciona
function atualizarMenu() {
    var nome = sessionStorage.NOME_USUARIO;

    // Pega os elementos do menu — verifica se existem antes de mexer
    var menuLogin   = document.getElementById("menuLogin");
    var menuCadastro = document.getElementById("menuCadastro");

    if (nome && menuLogin) {
        // Usuário logado: troca botão Login pelo nome dele
        menuLogin.innerHTML = `<a href="./perfil.html">${nome}</a>`;

        // Esconde o botão de cadastro
        if (menuCadastro) {
            menuCadastro.style.display = "none";
        }
    }
    // Se não estiver logado, não faz nada — deixa os botões normais
}

// Chamada nas páginas PROTEGIDAS (pesquisa, estatisticas)
// Redireciona para login se não estiver logado
function atualizarMenuProtegido() {
    var nome = sessionStorage.NOME_USUARIO;

    if (!nome) {
        // Não está logado: manda para o login
        alert("Faça o login para acessar essa página!");
        window.location.href = "../login.html";
        return; // para a execução aqui
    }

    // Está logado: atualiza o menu normalmente
    atualizarMenu();
}

function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    if (divAguardar) divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    if (divAguardar) divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto && divErrosLogin) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}


function limparSessao() {
    sessionStorage.clear();
    window.location.href = "../login.html";
}