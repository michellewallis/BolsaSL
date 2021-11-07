// CONEXION CON LA BASE DE DATOS
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'paginabolsa'
});

connection.connect((err)=> {
    if(!err){
        console.log('Connection Established Successfully');
        // connection.end();
    }else{
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    }
});

const express = require('express');
const {urlencoded}= require('body-parser')
const app = express();
var urlencodedParser = urlencoded({ extended: false })
const signInUp=require("./scripts/script_registro.js")

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/registro',(req, res)=> {
    res.sendFile(__dirname + '/pages/registro.html');       
});
app.get('/consulta', (req, res) => {
    res.sendFile(__dirname + '/pages/consulta.html');
  });
app.get('/transacciones', (req, res) => {
    res.sendFile(__dirname + '/pages/transacciones.html');
  });
app.get('/facturas', (req, res) => {
    res.sendFile(__dirname + '/pages/facturas.html');
  });
  
app.post('/logIn', urlencodedParser, (req, res)=>{
        console.log("DNI", req.body.input_dni_login, "password", req.body.input_password_login )
    let user_validation= 'SELECT * FROM clientes WHERE dni= ? AND contraseña= ?' ;
    let query_U_V=mysql.format(user_validation,[req.body.input_dni_login, req.body.input_password_login]);
    connection.query(query_U_V,(err,response)=>{
    if (err) throw err;
    console.log(response)
    connection.end();
})
    res.send(signInUp.div_consulta_sino)
})
app.listen(3000);





 



