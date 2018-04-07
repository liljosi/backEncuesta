const express = require('express');
const knex = require('../knex');
const router = express.Router();



router.post('/domicilio',(req,res,next)=>{
    knex('domicilio').insert({
        calle: req.body.calle,
        colonia: req.body.colonia,
        municipio:req.body.municipio,
        localidad: req.body.localidad
      }).then(function(data) {
        res.send('El domicilio se ha creado')
      });

});

router.post('/info',(req,res,next)=>{

    knex('escuela').insert({
        director: req.body.director,
        cct: req.body.cct,
        correo : req.body.correo,
        telefono: req.body.telefono,
        grado : req.body.grado,
        ciclo : req.body.ciclo,
        tiempo: req.body.tiempo


    }).then(function(data){
        res.send('escuela se ha creado')
    });

});

router.get('/domicilio',(req,res,next)=>{
   var domicilios = knex.select().table('domicilio').then(dom => {
       res.json(dom)
   })


});

module.exports = router;

