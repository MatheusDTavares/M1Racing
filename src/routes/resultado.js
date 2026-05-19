var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.get("/piloto", function(req, res) {
    resultadoController.buscarPilotos(req, res);
});

router.get("/tempo", function(req, res) {
    resultadoController.buscarTempo(req, res);
});

router.get("/interesse", function(req, res) {
    resultadoController.buscarInteresse(req, res);
});

router.get("/equipe", function(req, res) {
    resultadoController.buscarEquipe(req, res);
});

router.get("/curiosidade", function(req, res) {
    resultadoController.buscarCuriosidade(req, res);
});

router.get("/grandepremio", function(req, res) {
    resultadoController.buscarGrandePremio(req, res);
});

module.exports = router;
