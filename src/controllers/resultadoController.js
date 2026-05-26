// Importa o model que busca os resultados no banco
var resultadoModel = require("../models/resultadoModel")

// Busca os resultados individuais de um usuário específico
function buscarResultadosIndividuais(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log("Recuperando resultados em tempo real");

    resultadoModel.buscarMedidasEmTempoReal(idUsuario).then(function (resultado) {
        // Achou dados — manda pro front
        if(resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            // Não achou nada pra esse usuário
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos resultados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// Busca a contagem de votos por piloto favorito
function buscarPilotos(req, res) {
    resultadoModel.buscarPilotos()
    .then(function(piloto) {
        res.status(200).json(piloto);
    })
    .catch(function(erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

// Busca a contagem de há quanto tempo cada pessoa acompanha a F1
function buscarTempo(req, res) {
    resultadoModel.buscarResultadosGerais('r2', 'Tempo')
    .then(function(tempo) {
        res.status(200).json(tempo);
    })
    .catch(function(erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

// Busca a contagem do que cada pessoa assiste da F1
function buscarInteresse(req, res) {
    resultadoModel.buscarResultadosGerais('r3', 'Interesse')
    .then(function(interesse) {
        res.status(200).json(interesse);
    })
    .catch(function(erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

// Busca a contagem de votos por equipe favorita
function buscarEquipe(req, res) {
    resultadoModel.buscarEquipes()
    .then(function(equipe) {
        res.status(200).json(equipe);
    })
    .catch(function(erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

// Busca a contagem de qual era da F1 cada pessoa considera mais interessante
function buscarCuriosidade(req, res) {
    resultadoModel.buscarResultadosGerais('r5', 'Curiosidade')
    .then(function(curiosidade) {
        res.status(200).json(curiosidade);
    })
    .catch(function(erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

// Busca a contagem de qual GP cada pessoa assistiria ao vivo
function buscarGrandePremio(req, res) {
    resultadoModel.buscarGrandePremios()
    .then(function(grandepremio) {
        res.status(200).json(grandepremio);
    })
    .catch(function(erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

// Exporta todas as funções pra serem usadas nas rotas
module.exports = {
    buscarResultadosIndividuais,
    buscarPilotos,
    buscarTempo,
    buscarInteresse,
    buscarEquipe,
    buscarCuriosidade,
    buscarGrandePremio
}