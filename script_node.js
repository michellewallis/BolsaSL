// CONEXION CON LA BASE DE DATOS
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "paginabolsa",
});

connection.connect(err => {
    if (!err) {
        console.log("Connection Established Successfully");
        // connection.end();
    } else {
        console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
    }
});

const express = require("express");
const { urlencoded } = require("body-parser");
const app = express();
var urlencodedParser = urlencoded({ extended: false });
const signInUp = require("./scripts/script_DOM.js");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/registro", (req, res) => {
    res.sendFile(__dirname + "/pages/registro.html");
});
app.get("/consulta", (req, res) => {
    res.sendFile(__dirname + "/pages/consulta.html");
});
app.get("/transacciones", (req, res) => {
    res.sendFile(__dirname + "/pages/transacciones.html");
});
app.get("/facturas", (req, res) => {
    res.sendFile(__dirname + "/pages/facturas.html");
});
// Recepcionamos informacion con el formulario de consulta//

app.post("/consulta", urlencodedParser,  (req, res) => {

    // Declaremos essqueleto de query (verificar existencia de cliente por email)//
    let search_user = "SELECT * FROM clientes WHERE email= ?"

    // Extraemos valores del formulario y lo introducimos en nuestro esqueleto query//
    let query_user = 
    mysql.format(search_user,[
        req.body.email
    ])
    // Preguntamos a la base de dato con nuestra query ya personalizada //
    connection.query(query_user, (err, response) => {
        if (err) throw err;
    // Si, el array de respuesta esta vacio el cliente no existe, por lo tanto creamos uno //
        if (response === [] ) {
            let new_user = "INSERT INTO clientes VALUES(NULL, ?,?,?,?,NULL,?"
            let query_new_user = mysql.format(new_user, [
                req.body.dni,
                req.body.name,
                req.body.tel,
                req.body.email,
                req.body.direccion,
            ])
            connection.query(query_new_user, (err,response) => {
                if (err) throw err;
                console.log("usuario creado")
            })
        }
    });

    let id_user = "SELECT id_cliente FROM clientes WHERE email= ? "
    let query_id =
    mysql.format(id_user,[
        req.body.email
    ])
    let new_consult =
    "INSERT INTO consultas VALUES(NULL, ?,?,?)";
    const fecha = new Date();
    let fecha_calendario = fecha.getFullYear () + "-" + (fecha.getMonth ()+1) + "-" + fecha.getDate ()
    
    connection.query(query_id, (err, response) => {
        if (err) throw err;
        let id_usuario = response 
        console.log(id_usuario)
        let insert_consult =
        mysql.format(new_consult,[
            req.body.message,
        fecha_calendario,
        id_usuario
        
    ])
    
    connection.query(insert_consult,(err,response) => {
    if(err) throw err;
    console.log("consulta creada")
    })
    });
})

app.post("/logIn", urlencodedParser, (req, res) => {
    console.log(
        "DNI",
        req.body.input_dni_login,
        "password",
        req.body.input_password_login
    );
    let user_validation =
        "SELECT * FROM clientes WHERE dni= ? AND contraseña= ?";
    let query_U_V = mysql.format(user_validation, [
        req.body.input_dni_login,
        req.body.input_password_login,
    ]);
    connection.query(query_U_V, (err, response) => {
        if (err) throw err;
        console.log(response);
        connection.end();
    });
    res.send(signInUp.div_consulta_sino);
});
app.listen(3000);
