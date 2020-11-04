"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _UserModel = require('../model/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);

class TestController {

    UserOnRoute(req, res){
        _UserModel2.default.FindUserby(req.userId, 'id', (err, response) => {
            if(err) throw err;

            res.json({
                name: response[0].name,
                email: response[0].email
            });
        })
    }

}

exports. default = new TestController();