var database = require("../database/config")

function buscarResultadosGerais(resposta, apelido) {
    var instrucaoSql = `
    SELECT ${resposta} as ${apelido}, count(*) as total
    FROM pesquisa
    JOIN piloto p on pesquisa.r1 = p.id`
}