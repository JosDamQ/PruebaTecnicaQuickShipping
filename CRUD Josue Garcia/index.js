'use strict'

//importamos el archivo app
const app = require('./src/app')
const connection = require('./configs/mysql')

//abrimos la conexion de nuestro proyecto
connection.connect((err) => {
    if(err) throw err
    console.log('Connected to DB')
})

//iniciamos el metodo para que inicie nuestro proyecto
app.initServer()

