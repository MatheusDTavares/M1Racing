// Importa o config do banco pra executar as queries
var database = require("../database/config")

// Verifica se o usuário já tem uma resposta salva no banco
function verificar(id) {
    console.log("ACESSEI AS PESQUISAS", id)

    // Busca pelo id do usuário na tabela de pesquisa
    var instrucaoSql = `
        SELECT fkUsuario FROM pesquisa WHERE fkUsuario = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Insere as respostas da pesquisa pela primeira vez
function guardar(idUsuario, r1, r2, r3, r4, r5, r6) {
    console.log("ACESSEI O USUARIO MODEL", idUsuario, r1, r2, r3, r4, r5, r6);

    // Query que insere todas as respostas vinculadas ao usuário
    var instrucaoSql = `
        INSERT INTO pesquisa (fkUsuario, r1, r2, r3, r4, r5, r6) VALUES ('${idUsuario}','${r1}', '${r2}', '${r3}', '${r4}', '${r5}', '${r6}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Atualiza as respostas de quem já tinha respondido antes
function atualizar(idUsuario, r1, r2, r3, r4, r5, r6) {
    console.log("ACESSEI O USUARIO MODEL", idUsuario, r1, r2, r3, r4, r5, r6);

    // Query que sobrescreve todas as respostas antigas do usuário
    var instrucaoSql = `
        UPDATE pesquisa SET r1 = '${r1}', r2 = '${r2}', r3 = '${r3}', r4 = '${r4}', r5 = '${r5}', r6 = '${r6}' WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Exporta as funções pra serem usadas no controller
module.exports = {
    verificar,
    guardar,
    atualizar
};