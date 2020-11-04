"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mysql = require('mysql'); var _mysql2 = _interopRequireDefault(_mysql);

class ConnectionDatabase{

    Connection(){
        const Conn = _mysql2.default.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "jwt"
        });

        return Conn;
    }

    StatusDatabase(){
        const conn = this.Connection();

        const verification = conn.connect((error) => {
            if(error){
                console.log('error connection: '+error.stack);
            }

            console.log(`connected as id: ${conn.threadId}`);
        });
    }

}

exports. default = new ConnectionDatabase();