// CONEXION CON LA BASE DE DATOS

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/pages/registro.html');
  });
app.post('/', urlencodedParser, (req, res) => {
    console.log('First Name:', req.body.first_name, '\nLast Name: ', req.body.last_name, '\nEmail: ', req.body.email);
    res.send(req.body);
});
app.listen(3000);


const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'paginabolsa'
});

// connection.connect((err)=> {
//     if(!err){
//         console.log('Connection Established Successfully');
//         connection.end();
//     }else{
//         console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
//     }
// });


 


// const validar_Usuario=()=>{
//     let user_validation= 'SELECT * FROM clientes WHERE dni= ? AND contraseña= ?' ;
//     let query_U_V=mysql.format(user_validation,[
//     document.getElementById("input_dni_login").value,
//     document.getElementById("input_password_login").value
// ])


// connection.query(query_U_V,(err,response)=>{
//     if (err) throw err;
//     console.log(response)
//     connection.end();
// })}
