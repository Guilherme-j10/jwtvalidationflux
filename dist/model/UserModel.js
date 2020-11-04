"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ConnectionDatabase = require('../database/ConnectionDatabase'); var _ConnectionDatabase2 = _interopRequireDefault(_ConnectionDatabase);

class UserModel {

    constructor(){
        this.conn = _ConnectionDatabase2.default.Connection();
    }

    CreateUser(dataFetching, callback){
        return this.conn.query('INSERT INTO user SET ?', dataFetching, callback);
    }

    FindUserby(searcher, element, callback){
        return this.conn.query(`SELECT * FROM user WHERE ${element} = "${searcher}"`, callback);
    }

}

exports. default = new UserModel();