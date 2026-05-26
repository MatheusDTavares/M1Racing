// Importa o config do banco pra executar as queries
var database = require("../database/config")

// Busca os resultados gerais de uma pergunta retorna todos, o mais votado e o menos votado
function buscarResultadosGerais(resposta, apelido) {

    // Busca todos os resultados agrupados e ordenados do maior pro menor
    var instrucaoSql = `
        SELECT ${resposta} as ${apelido}, count(*) as total
        FROM pesquisa
        GROUP BY ${resposta}
        ORDER BY total DESC`;

    // Busca só o mais votado
    var instrucaoSqlMaior = `
        SELECT ${resposta} as ${apelido}, count(*) as total
        FROM pesquisa
        GROUP BY ${resposta}
        ORDER BY total DESC
        LIMIT 1`;

    // Busca só o menos votado
    var instrucaoSqlMenor = `
        SELECT ${resposta} as ${apelido}, count(*) as total
        FROM pesquisa
        GROUP BY ${resposta}
        ORDER BY total ASC
        LIMIT 1`;

    // Executa as três queries em sequência e retorna tudo junto num array
    return database.executar(instrucaoSql)
        .then(function (respostas) {
            return database.executar(instrucaoSqlMaior)
                .then(function (maior) {
                    return database.executar(instrucaoSqlMenor)
                        .then(function (menor) {
                            // Retorna [todos os resultados, o maior, o menor]
                            return [respostas, maior[0], menor[0]];
                        });
                });
        });
}

// Busca os resultados de equipes favoritas fazendo join com a tabela de equipes
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

// Busca os resultados de pilotos favoritos fazendo join com a tabela de pilotos
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

// Busca os resultados de GPs favoritos fazendo join com a tabela de GrandePremio
function buscarGrandePremios() {
    var instrucaoSql = `
        SELECT G.nome as GrandePremio, count(*) as total
        FROM pesquisa ps
        JOIN GrandePremio G ON G.idGp = ps.r6
        GROUP BY G.nome
        ORDER BY total DESC`;

    var instrucaoSqlMaior = `
        SELECT G.nome as GrandePremio, count(*) as total
        FROM pesquisa ps
        JOIN GrandePremio G ON G.idGp = ps.r6
        GROUP BY G.nome
        ORDER BY total DESC
        LIMIT 1`;

    var instrucaoSqlMenor = `
        SELECT G.nome as GrandePremio, count(*) as total
        FROM pesquisa ps
        JOIN GrandePremio G ON G.idGp = ps.r6
        GROUP BY G.nome
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

// Exporta todas as funções pra serem usadas no controller
module.exports = {
    buscarResultadosGerais,
    buscarPilotos,
    buscarEquipes,
    buscarGrandePremios
};