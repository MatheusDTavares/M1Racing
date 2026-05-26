// Importa o express e cria o roteador
var express = require("express");
var router = express.Router();

// Importa o controller que busca os resultados no banco
var resultadoController = require("../controllers/resultadoController");

// Rota que busca os resultados de pilotos favoritos
router.get("/piloto", function(req, res) {
    resultadoController.buscarPilotos(req, res);
});

// Rota que busca os resultados de há quanto tempo acompanha a F1
router.get("/tempo", function(req, res) {
    resultadoController.buscarTempo(req, res);
});

// Rota que busca os resultados do que o usuário assiste
router.get("/interesse", function(req, res) {
    resultadoController.buscarInteresse(req, res);
});

// Rota que busca os resultados de equipes favoritas
router.get("/equipe", function(req, res) {
    resultadoController.buscarEquipe(req, res);
});

// Rota que busca os resultados de qual era da F1 é mais interessante
router.get("/curiosidade", function(req, res) {
    resultadoController.buscarCuriosidade(req, res);
});

// Rota que busca os resultados de qual GP o usuário assistiria ao vivo
router.get("/grandepremio", function(req, res) {
    resultadoController.buscarGrandePremio(req, res);
});

// Exporta o roteador pra ser usado no app.js
module.exports = router;