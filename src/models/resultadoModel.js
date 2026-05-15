var database = require("../database/config")

function buscarResultadosGerais(resposta, apelido) {
    var instrucaoSql = `
        SELECT ${resposta} as ${apelido}, count(*) as total
        FROM pesquisa
        GROUP BY ${resposta}
        ORDER BY total DESC`;

    
    var instrucaoSqlMaior = `
        SELECT ${resposta} as ${apelido}, count(*) as total
        FROM pesquisa
        GROUP BY ${resposta}
        ORDER BY total DESC
        LIMIT 1`;

    var instrucaoSqlMenor = `
        SELECT ${resposta} as ${apelido}, count(*) as total
        FROM pesquisa
        GROUP BY ${resposta}
        ORDER BY total ASC
        LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
        .then(function (respostas) {
            return database.executar(instrucaoSqlMaior)
                .then(function (maior) {
                    return database.executar(instrucaoSqlMenor)
                        .then(function (menor) {
                            // CORREÇÃO: maior[0] e menor[0] para pegar o objeto, não o array
                            return [respostas, maior[0], menor[0]];
                        });
                });
        });
}

function buscarEquipes() {
    var instrucaoSql = `
        SELECT e.nome as Equipe, count(*) as total
        FROM pesquisa ps
        JOIN equipe e ON e.idEquipe = ps.r4
        GROUP BY e.nome
        ORDER BY total DESC`;

    var instrucaoSqlMaior = `
        SELECT e.nome as Equipe, count(*) as total
        FROM pesquisa ps
        JOIN equipe e ON e.idEquipe = ps.r4
        GROUP BY e.nome
        ORDER BY total DESC
        LIMIT 1`;

    var instrucaoSqlMenor = `
        SELECT e.nome as Equipe, count(*) as total
        FROM pesquisa ps
        JOIN equipe e ON e.idEquipe = ps.r4
        GROUP BY e.nome
        ORDER BY total ASC
        LIMIT 1`;

    return database.executar(instrucaoSql)
        .then(function (respostas) {
            return database.executar(instrucaoSqlMaior)
                .then(function (maior) {
                    return database.executar(instrucaoSqlMenor)
                        .then(function (menor) {
                            return [respostas, maior[0], menor[0]];
                        });
                });
        });
}

function buscarPilotos() {
    var instrucaoSql = `
        SELECT p.nome as Piloto, count(*) as total
        FROM pesquisa ps
        JOIN piloto p ON p.idPiloto = ps.r1
        GROUP BY p.nome
        ORDER BY total DESC`;

    var instrucaoSqlMaior = `
        SELECT p.nome as Piloto, count(*) as total
        FROM pesquisa ps
        JOIN piloto p ON p.idPiloto = ps.r1
        GROUP BY p.nome
        ORDER BY total DESC
        LIMIT 1`;

    var instrucaoSqlMenor = `
        SELECT p.nome as Piloto, count(*) as total
        FROM pesquisa ps
        JOIN piloto p ON p.idPiloto = ps.r1
        GROUP BY p.nome
        ORDER BY total ASC
        LIMIT 1`;

    return database.executar(instrucaoSql)
        .then(function (respostas) {
            return database.executar(instrucaoSqlMaior)
                .then(function (maior) {
                    return database.executar(instrucaoSqlMenor)
                        .then(function (menor) {
                            return [respostas, maior[0], menor[0]];
                        });
                });
        });
}

module.exports = {
    buscarResultadosGerais,
    buscarPilotos,
    buscarEquipes
};