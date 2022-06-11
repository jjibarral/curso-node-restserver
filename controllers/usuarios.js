const { request, response } = require('express');



const getUsuario = (req = request, res = response)=>{ 
    //const params = req.query;
    const { a, name = 'no', id} = req.query;
    res.status(201).json({
        msg: 'get - controlador',
        a,
        name,
        id
    });
 }

 const postUsuario = (req = request, res = response)=>{
    //const body = req.body;
    const { nombre, edad } = req.body;

     
    res.status(201).json({
        msg: 'Post - controller',
        nombre,
        edad
    });
 }

 const putUsuario = (req, res = response)=>{
    const { id } = req.params;
    res.status(201).json({
        msg: 'put - controller',
        id
    });
 }

 const delUsuario = (req, res)=>{
    res.status(201).json({
        msg: 'del -controller'
    });
 }

 module.exports = {
     getUsuario,
     postUsuario,
     putUsuario,
     delUsuario
 }