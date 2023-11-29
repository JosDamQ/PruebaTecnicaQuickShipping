'use strict'

//importar express y creamos las variables
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3200

//importamos el archivo de la carpeta ruta
const monedaRoutes = require('./routes/moneda')

//configuramos express para que sepa como lo vamos a utilizar
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//ruta general
app.use('/moneda', monedaRoutes)

//creamos la funcion para levantar el servidor 
exports.initServer = () => {
    app.listen(port)
    console.log(`Server is running in port ${port}`)
}
