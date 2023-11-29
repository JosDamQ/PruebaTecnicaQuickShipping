'use strict'

const connection = require('../../configs/mysql')
const axios = require('axios')

//funcion get
exports.getAll = (req, res) => {
    connection.query('SELECT * FROM MONEDA', (err, result) => {
        //validamos si hay algun error al traer a la base de datos
        if(err) return res.status(500).send({message: 'Error gettint data'})
        //si todo esta correcto le devolvemos los registros que hay en la base de datos
        res.render('monedas', {
            data: result
        })
    })
}

//funcion get por Id
exports.getOne = (req, res) => {
    //desestructuramos el id que se va a enviar mediante la ruta
    const { id } = req.params
    //hacemos la consulta sql
    connection.query('SELECT * FROM MONEDA WHERE idMoneda =?', [id], (err, result) => {
        //validmaos si hay algun error al traer a la base de datos
        if(err) return res.status(500).send({message: 'Error gettin data'})
        //si el id no existe en la base de datos se mostrara un mensaje diciendo que no hay un registro con ese ID
        if(result.length === 0) return res.send({message: 'No hay un registro con este Id'})
        // si todo esta correcto le devolvemos el registro con el Id indicado
        res.render('monedasEdit', {
            data: result[0]
        })
    })
}

//funcion add moneda
exports.add = (req, res) => {
    //desestructuramos el body de la peticion con los datos entrantes
    const { nombre, venta, compra } = req.body
    //validamos que se esten enviando los datos en la peticion
    if(!nombre || !venta || !compra) return res.status(400).send({message: 'Los parametros son necesarios'})
    //validamos que los valores de compra y venta no puedan ser numeros negativos
    if(venta <= 0 || compra <= 0) return res.send({message: 'No puede ser esa cantidad'})
    //iniciamos la consulta sql
    connection.query('INSERT INTO MONEDA (nombre, venta, compra) VALUES(?,?,?)',[nombre, venta, compra], (err, result) => {
        if(err) return res.status(500).send({message: 'Error creating'})
        //guardamos
        console.log(result)
        res.redirect('/moneda/getAll')
    })
}

//funcion delete moneda
exports.delete = (req, res) => {
    //desestructuramos el id que se le va a mandar por medio de la ruta
    const { id } = req.params
    //iniciamos query sql
    connection.query('DELETE FROM MONEDA WHERE idMoneda=?', [id], (err, result) => {
        if(err) return res.status(500).send({message: 'Error deleting'})
        //validamos que el id que se manda por ruta este asociado a un valor en la base de datos
        if(result.affectedRows === 0) return res.status(404).send({message: 'Id no encontrado'})
        //si todo va bien se elimina
        res.redirect('/moneda/getAll')
    })
}

//funcion update moneda
exports.update = (req, res) => {
    //desestructuramos el id de la ruta
    const { id } = req.params
    //desestructuramos los datos que van a venir del body de la peticion
    const { nombre, venta, compra} = req.body
    //validamos que se le esten mandando los parametros requeridos
    if(!nombre || !venta || !compra) return res.status(400).send({message: 'Parametros requeridos'})
    //validamos que los valores de compra y venta no puedan ser negativos
    if(venta <= 0 || compra <= 0) return res.send({message: 'No puede ser esa cantidad'})
    //iniciamos la consulta sql
    connection.query('UPDATE MONEDA SET nombre=?, venta=?, compra=? WHERE idMoneda=?', [nombre, venta, compra, id], (err, result) => {
        if(err) return res.status(500).send({message: 'Error updatind'})
        //validamos que el id que se mande por ruta este asociado a un valor en la base de datos
        if(result.affectedRows === 0) return res.status(404).send({message: 'Id no encontrado'})
        //Editamos el valor
        res.redirect('/moneda/getAll')
    })
}

//funcion API externa
exports.apiExterna = async(req, res) => {
    try{
        const { data } = await axios.get('https://tipodecambio.paginasweb.cr/api/')
        const { venta, compra} = data
        connection.query('INSERT INTO MONEDA (venta, compra) VALUES(?,?)', [venta, compra], (err, result) => {
            if(err) return res.status(500).send({message: 'Error creating data'})
            console.log({venta, compra})
            res.redirect('/moneda/getAll')
        })

    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'error with the API'})
    }
}

