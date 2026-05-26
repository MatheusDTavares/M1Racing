// Importa o express e cria o roteador
var express = require("express");
var router = express.Router();

// Importa o controller que tem as funções da pesquisa
var pesquisaController = require("../controllers/pesquisaController")

// Rota de salvar recebe as respostas do formulário e manda pro controller guardar
router.post("/guardar", function (req,res) {
    pesquisaController.guardar(req,res);
});

// Rota de verificar checa se o usuário já respondeu a pesquisa antes
router.post("/verificar", function (req,res) {
    pesquisaController.verificar(req,res);
});

// Exporta o roteador pra ser usado no app.js
module.exports = router;