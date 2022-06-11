const express = require('express');
var cors = require('cors')

class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPathAPi = '/api/usuarios';
        //middleware
        this.middlewares();
        //rutas
        this.routes(); 
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        //lectura y parseo (POST,DELETE,PUT)   ============> GET NO RECIBE INFORMACIÓN DEL BODY
        this.app.use(express.json());
        //Directorio público
        this.app.use(express.static('public'));
    }
    routes(){
       this.app.use(this.usuariosPathAPi,require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }
}


module.exports = Server;