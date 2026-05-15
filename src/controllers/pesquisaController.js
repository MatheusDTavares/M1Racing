var pesquisaModel = require("../models/pesquisaModel")

function verificar(req,res){
    var id = req.body.idServer;

    pesquisaModel.verificar(id).then((resultado) => {
        
        if(resultado.length > 0) {
            // se o usuario respodeu
            res.status(200).json({ respondeu : true});
        } else {
            // se o usuario não respondeu
            res.status(200).json({ respondeu : false});
        }
    }).catch((erro) => {
        console.log(erro);
        res.status(500).json({  mensagem: "Erro ao verificar pesquisa" });
    });
    
}

function guardar(req,res) {
    //Crie uma variável que vá recuperar os valores do arquivo pesquisa.html
    var idUsuario = req.body.idUsuarioServer;
    var r1 = req.body.r1Server;
    var r2 = req.body.r2Server;
    var r3 = req.body.r3Server;
    var r4 = req.body.r4Server;
    var r5 = req.body.r5Server;
    var r6 = req.body.r6Server;

    // Validações dos valores
    if(r1 == undefined){
        res.status(200).send("r1 está undefined");
    } else if(r2 == undefined){
        res.status(200).send("r2 está undefined");
    } else if(r3 == undefined){
        res.status(200).send("r3 está undefined");
    } else if(r4 == undefined){
        res.status(200).send("r4 está undefined");
    } else if(r5 == undefined){
        res.status(200).send("r5 está undefined");
    } else if(r6 == undefined){
        res.status(200).send("r6 está undefined");
    }

    else{

        //Passar os valores como parâmetro e vai para o pesquisaModel.js
        pesquisaModel.verificar(idUsuario).then((resultado) => {
            if(resultado.length > 0){
                pesquisaModel.atualizar(idUsuario, r1, r2, r3, r4, r5, r6)
                .then((resultado) => {
                    res.status(200).json(resultado);
                })
            } else {
                pesquisaModel.guardar(idUsuario, r1, r2, r3, r4, r5, r6)
                .then(
                    function(resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                            console.log(erro);
                            console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
            }
        });
    }
}

module.exports = {
    verificar,
    guardar
    
}
