const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended :true
}));


var escuelaRouter = require('./routes/escuela');
var respuestaRouter = require('./routes/respuesta');

app.use('/escuela', escuelaRouter);
app.use('/escuela',respuestaRouter);

app.listen('3000',()=>{
console.log('node running on port 3000');
});

module.exports = {
    app: app,
    server: server
  };