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

router.get('/domicilios',(req,res,next)=>{
   var domicilios = knex.select().table('domicilio').then(dom => {
       console.log(dom)
   })
  console.log(domicilios);

});

module.exports = router;

