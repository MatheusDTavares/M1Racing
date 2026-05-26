// Importa o express e cria o roteador
var express = require("express");
var router = express.Router();

// Importa o controller que tem as funções de cadastrar e autenticar
var usuarioController = require("../controllers/usuarioController");

// Rota de cadastro — recebe os dados do formulário e manda pro controller cadastrar
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

// Rota de login — recebe email e senha e manda pro controller autenticar
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

// Exporta o roteador pra ser usado no app.js
module.exports = router;