function validarAcesso(paginaDestino) {
    // Pegamos o nome do usuário que foi salvo no login
    const usuario = sessionStorage.NOME_USUARIO;

    if (usuario != undefined) {
        // Se existe um usuário, redireciona para a página do carro
        window.location.href = paginaDestino;
    } else {
        // Se não existe, avisa e manda para o login
        alert("Faça o login para saber mais!");
        window.location.href = "login.html";
    }
}