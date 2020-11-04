"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
const rotas = _express.Router.call(void 0, );

var _auth = require('./middleware/auth'); var _auth2 = _interopRequireDefault(_auth);
var _ConnectionDatabase = require('./database/ConnectionDatabase'); var _ConnectionDatabase2 = _interopRequireDefault(_ConnectionDatabase);
var _UserController = require('./controller/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _ValidateController = require('./controller/ValidateController'); var _ValidateController2 = _interopRequireDefault(_ValidateController);
var _TestController = require('./controller/TestController'); var _TestController2 = _interopRequireDefault(_TestController);

rotas.get('/satusdatabase', _auth2.default, (req, res) =>{ // tambem posso deixar apenas umas rota sendo validada passando o middleware direto nela
    res.json(_ConnectionDatabase2.default.StatusDatabase());
});

rotas.use(_auth2.default); //todas as rotas abaixo deste use serão validadas

rotas.get('/myposts', _TestController2.default.UserOnRoute);
rotas.post('/User', _UserController2.default.InsertUser);
rotas.post('/SessionValidate', _ValidateController2.default.validate);

exports. default = rotas;