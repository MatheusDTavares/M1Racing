var database = require("../database/config")

function buscarResultadosGerais(resposta,apelido) {
    var instrucaoSql = `
    SELECT ${resposta} as ${apelido}, count(*) as total
    FROM pesquisa
    GROUP BY ${resposta}
    ORDER BY ${resposta} ASC`;

    var instrucaoSqlMaior = `
    SELECT ${resposta} as ${apelido}, count(*) as total
    FROM pesquisa
    GROUP BY ${resposta}
    ORDER BY ${resposta} ASC
    LIMIT 1`;

    var instrucaoSqlMenor = `
    SELECT ${resposta} as ${apelido}, count(*) as total
    FROM pesquisa
    GROUP BY ${resposta}
    ORDER BY ${resposta} ASC
    LIMIT 1`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
    .then(function(respostas)   {
        return database.executar(instrucaoSqlMaior)
        .then(function(maior) {
            return database.executar(instrucaoSqlMenor)
            .then(function(menor)   {
                return [respostas, maior[0], menor[0]];
            })
        })
    })
    
}


function buscarResultadosIndividuais(idUsuario) {
    var instrucaoSql = `
    p.r1 as piloto
    p.r2
    p.r3
    p.r4
    p.r5
    p.r6
    FROM pesquisa p
    WHERE p.fkUsuario = ${idUsuario}`
}