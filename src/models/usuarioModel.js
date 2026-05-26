// Importa o config do banco pra executar as queries
var database = require("../database/config")

// Busca um usuário no banco pelo email e senha pra fazer o login
function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL", email, senha)

    // Query que procura o usuário com esse email e senha exatos
    var instrucaoSql = `
        SELECT id, nome, email as SiteF1 FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Insere um novo usuário no banco com nome, email e senha
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL", nome, email, senha);

    // Query que insere o novo usuário na tabela
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Exporta as funções pra serem usadas no controller
module.exports = {
    autenticar,
    cadastrar
};