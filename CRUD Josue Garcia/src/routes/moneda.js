'use strict'
//Configuramos el enrutador de express
const express = require('express')
const api = express.Router()

//importamos el controlador moneda
const monedaController = require('../controllers/moneda')

//Indicamos todas las ruta
api.get('/getAll', monedaController.getAll)
api.get('/getOne/:id', monedaController.getOne)
api.post('/save', monedaController.add)
api.get('/delete/:id', monedaController.delete)
api.post('/edit/:id', monedaController.update)

//API
api.get('/api', monedaController.apiExterna)


//exportamos el enrutador para poder ser usado en otros archivos
module.exports = api
