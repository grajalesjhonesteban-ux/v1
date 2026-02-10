const Usuario = require('../modelss/usuario.models');
const createUsuario = async (data) => {
    return await Usuario.create(data);
};

const ListarUsuarios = async () => {
    return await Usuario.findAll();
};
module.exports = {
    createUsuario,
    ListarUsuarios
};