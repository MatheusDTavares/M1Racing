// Importa o express e cria o roteador
var express = require("express");
var router = express.Router();

// Rota principal quando alguém acessa o "/" renderiza a página inicial
router.get("/", function (req, res) {
    res.render("index");
});

// Exporta o roteador pra ser usado no app.js
module.exports = router;