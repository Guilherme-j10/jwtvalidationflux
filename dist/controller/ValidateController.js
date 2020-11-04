"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv/config');
var _cript = require('cript'); var _cript2 = _interopRequireDefault(_cript);
var _UserModel = require('../model/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class ValidateController {

    async validate(req, res){
        const { email, password } = req.body;
        const user =  _UserModel2.default.FindUserby(email, 'email', (err, response) => {
            if(err) throw err;

            if(response == '') return res.status(404).json('User not Found');

            if(_cript2.default.compare(response[0].hashPassword, password) == false) return res.status(401).json('Wrong password');

            res.json({
                token: _jsonwebtoken2.default.sign({ userId: response[0].id }, process.env.SECRET_KEY, {
                    expiresIn: '1d'
                })
            });
        });
    }

}

exports. default = new ValidateController();