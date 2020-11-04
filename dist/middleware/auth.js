"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv/config');
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

exports. default = (req, res, next) => {
    const AuthHeader = req.headers.autorizate;

    if(!AuthHeader) return res.status(401).json('Token not provided in autorizate headers');

    const [ headers, payloadFromHeader, signature ] = AuthHeader.split(' ');

    try {

        const payload = _jsonwebtoken2.default.verify(AuthHeader, process.env.SECRET_KEY);
        
        req.userId = payload.userId;

        next();

    } catch (error) {

        res.json(error);

    }
}