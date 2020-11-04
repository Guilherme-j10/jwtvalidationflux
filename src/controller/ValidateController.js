import 'dotenv/config';
import cript from 'cript';
import UserModel from '../model/UserModel';
import jwt from 'jsonwebtoken';

class ValidateController {

    async validate(req, res){
        const { email, password } = req.body;
        const user =  UserModel.FindUserby(email, 'email', (err, response) => {
            if(err) throw err;

            if(response == '') return res.status(404).json('User not Found');

            if(cript.compare(response[0].hashPassword, password) == false) return res.status(401).json('Wrong password');

            res.json({
                token: jwt.sign({ userId: response[0].id }, process.env.SECRET_KEY, {
                    expiresIn: '1d'
                })
            });
        });
    }

}

export default new ValidateController();