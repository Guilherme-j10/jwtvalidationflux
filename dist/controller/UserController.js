"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _UserModel = require('../model/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);
var _cript = require('cript'); var _cript2 = _interopRequireDefault(_cript);

class UserConrtoller {

    async InsertUser(req, res){
        const { email, name, password } = req.body;
        const datafetch = {
            name: name,
            email: email,
            password: password,
            hashPassword: ''
        };

        datafetch.hashPassword = _cript2.default.encString(datafetch.password);
        datafetch.password = '';

        const create = await _UserModel2.default.CreateUser(datafetch, (err, response) => {
            if(err) throw err;

            res.json(response.insertId);
        });
    }

}

exports. default = new UserConrtoller;