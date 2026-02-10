const usuarioService = require('../services/usuario.service');
const crear = async (req, res) =>{
    try{
        const usuario = await usuarioService.createUsuario(req.body);
        res.status(201).json(usuario);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const listar = async (req, res) =>{
    const usuarios = await usuarioService.ListarUsuarios();
    res.json(usuarios);
};
module.exports ={
    crear,
    listar
};