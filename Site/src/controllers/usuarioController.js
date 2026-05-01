var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    usuarioModel.autenticar(email, senha)
        .then(resultado => {
            if (resultado.length == 1) {
                res.json({
                    id: resultado[0].id,
                    email: resultado[0].email,
                    nome: resultado[0].nome,
                   
                });
            } else {
                res.status(403).send("Email e/ou senha inválido(s)");
            }
        })
        .catch(erro => {
            console.log("Erro ao autenticar:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    usuarioModel.cadastrar(nome, email, senha)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log("Erro ao cadastrar:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    autenticar,
    cadastrar
};
