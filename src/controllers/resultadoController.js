var resultadoModel = require("../models/resultadoModel")

function buscarResultadosIndividuais(req,res) {
    var idUsuario = req.params.idUsuario;

    console.log("Recuperando resultados em tempo real");

    resultadoModel.buscarMedidasEmTempoReal(idUsuario).then(function (resultado){
        if(resultado.length > 0) {
            res.status(200).json(resultado);
        }   else   {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscaros ultimos resultados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

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

function buscarTempo(req,res) {
    resultadoModel.buscarResultadosGerais('r2', 'Tempo')
    .then(function(tempo)  {
        res.status(200).json(tempo);
    })
    .catch(function(erro)  {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarInteresse(req,res) {
    resultadoModel.buscarResultadosGerais('r3', 'Interesse')
    .then(function(interesse)  {
        res.status(200).json(interesse);
    })
    .catch(function(erro)  {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

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

function buscarCuriosidade(req,res) {
    resultadoModel.buscarResultadosGerais('r5', 'Curiosidade')
    .then(function(curiosidade)  {
        res.status(200).json(curiosidade);
    })
    .catch(function(erro)  {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarOpniao(req,res) {
    resultadoModel.buscarResultadosGerais('r6', 'Opniao')
    .then(function(opniao)  {
        res.status(200).json(opniao);
    })
    .catch(function(erro)  {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {

    buscarResultadosIndividuais,
    buscarPilotos,
    buscarTempo,
    buscarInteresse,
    buscarEquipe,
    buscarCuriosidade,
    buscarOpniao

}