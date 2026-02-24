const Usuario = require('../models/usuario.models');
const createUsuario = async (data) => {
    return await Usuario.create(data);
};

const ListarUsuarios = async () => {
    return await Usuario.findAll();
};

//obtener por el id
const obtenerUsuarioPorId = async (id) => {
    return await Usuario.findByPk(id);
};
//actualizar usuario
const actualizarUsuario = async (id, data) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        return null;
    }
    await usuario.update(data);
    return usuario;
};
    //eliminar usuario
const eliminarUsuario = async (id) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        return null;
    }
    await usuario.destroy();
    return true;
};
module.exports = {
    createUsuario,
    ListarUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario
};