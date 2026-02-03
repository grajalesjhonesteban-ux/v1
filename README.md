# Comandos
``git --version ``
``node -v``
``npm -v``
``git init``
``git add``
``git commit -m "v1"``
``added 65 packages, and audited 66 packages in 4s``

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