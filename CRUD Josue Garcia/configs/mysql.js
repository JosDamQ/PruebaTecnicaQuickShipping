'use strict'

const mysql = require('mysql')

//creamos la funcion que se conecta a la base de datos con los datos requeridos
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_CRUD_JosueGarcia"
})




module.exports = connection