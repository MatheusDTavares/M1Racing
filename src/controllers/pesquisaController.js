// Importa o model que faz as queries da pesquisa no banco
var pesquisaModel = require("../models/pesquisaModel")

// Função que verifica se o usuário já respondeu a pesquisa
function verificar(req, res) {
    var id = req.body.idServer;

    // Manda pro model checar no banco se já tem resposta desse usuário
    pesquisaModel.verificar(id).then((resultado) => {

        // se há resgistro de resposta
        if(resultado.length > 0) {
            res.status(200).json({ respondeu: true });
        } else {
            // Não achou nada — ainda não respondeu
            res.status(200).json({ respondeu: false });
        }
    }).catch((erro) => {
        console.log(erro);
        res.status(500).json({ mensagem: "Erro ao verificar pesquisa" });
    });
}

// Função que salva ou atualiza as respostas da pesquisa
function guardar(req, res) {

    // Pega todas as respostas que vieram do formulário
    var idUsuario = req.body.idUsuarioServer;
    var r1 = req.body.r1Server; // piloto favorito
    var r2 = req.body.r2Server; // há quanto tempo acompanha
    var r3 = req.body.r3Server; // o que assiste
    var r4 = req.body.r4Server; // equipe favorita
    var r5 = req.body.r5Server; // era favorita
    var r6 = req.body.r6Server; // GP que assistiria ao vivo

    // Valida se todas as respostas vieram — se faltar uma, para tudo
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
    } else {

        // Verifica se o usuário já respondeu antes para decidir se insere ou atualiza
        pesquisaModel.verificar(idUsuario).then((resultado) => {

            // atualiza as respostas antigas
            if(resultado.length > 0){
                pesquisaModel.atualizar(idUsuario, r1, r2, r3, r4, r5, r6)
                .then((resultado) => {
                    res.status(200).json(resultado);
                })
            } else {

                // Se for a primeira vez respondendo insere no banco
                pesquisaModel.guardar(idUsuario, r1, r2, r3, r4, r5, r6)
                .then(
                    function(resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
            }
        });
    }
}

// Exporta as funções pra serem usadas nas rotas
module.exports = {
    verificar,
    guardar
}