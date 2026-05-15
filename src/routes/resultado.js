var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.get("/geral", function(req,res){
    dadosController.buscarResultadosGerais(req,res)});

router.get("/individual:IdUsuario", function(req,res){
    dadosController.buscarResultadosGerais(req,res)})

router.get("/piloto", function(req,res){
    dadosController.buscarResultadosGerais(req,res)});


router.get("/tempo", function(req,res){
    dadosController.buscarResultadosGerais(req,res)});


router.get("/interesse", function(req,res){
    dadosController.buscarResultadosGerais(req,res)});


router.get("/equipe", function(req,res){
    dadosController.buscarResultadosGerais(req,res)});


router.get("/curiosidade", function(req,res){
    dadosController.buscarResultadosGerais(req,res)});


router.get("/opniao", function(req,res){
    dadosController.buscarResultadosGerais(req,res)});

module.exports = router;
