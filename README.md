# Comandos
``git --version ``
``node -v``
``npm -v``
``git init``
``git add``
``git commit -m "v1"``
``added 65 packages, and audited 66 packages in 4s``
``added 65 packages, and audited 66 packages in 4s``
**inicias un proyecto**
``npm init -y``



# 📁Estructura  profesional de una API en Node.js
api-node

|-src ****Aquí vive todo el codigo real del proyecto**
    |-config **Configuraciones globales**
    |-controllers **controla las peticiones HTTO**
    |-routes **Define las URLs de la API**
    |-services **Lógica del negocio**
    |-models **Representa las tablas de la base de datos**
    |-meddlewares **Intermediarios de seguridad y validación**
    |-utils **Funciones reutilizables**
    |-app.js **Configuración de la aplicación**
    |-server.js **Punto de arranque** 

``npm install dotenv sequelize mysql2 pg pg-hstore``
``npm install nodemon --save-dev``
crear .env anivel de src
```
DB_DIALECT=mysql
DB_HOST=localhost
DB_PORT=3306
DB_NAME=node_api3278524
DB_USER=root
DB_PASSWORD=
PORT=3000 

```
📁 src/config/database.js

📁 src/server .js

configuramos packge.json ``node src/server.js",``
ejecutamos el servidor con ``npm start``
ajustamos a app.js ``
const PORT=3000;
app.listen(PORT,()=>{
    console.log("Servidor activo")
});``
module.export = app.js

📁src/models/usuario.model.js
📁src/services/usuario.service.js
📁src/controllers/usuario.controller.js


