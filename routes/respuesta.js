const express = require('express');
const knex = require('../knex');
const router = express.Router();



router.post('/respuestas',(req,res,next)=>{
    knex('respuestas').insert({
        respuesta: req.body.respuesta,
        observaciones: req.body.observaciones
      }).then(function(data) {
        res.send('La respuesta se ha guardado')
      });

});

router.put('/respuestas',(req,res,next)=>{

    
})



router.get('/respuestas',(req,res,next)=>{
   var respuestas = knex.select().table('respuestas').then(resp => {
       res.json(resp)
   })


});

module.exports = router;

