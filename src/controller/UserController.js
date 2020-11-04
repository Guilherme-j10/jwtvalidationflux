import User from "../model/UserModel";
import cript from 'cript';

class UserConrtoller {

    async InsertUser(req, res){
        const { email, name, password } = req.body;
        const datafetch = {
            name: name,
            email: email,
            password: password,
            hashPassword: ''
        };

        datafetch.hashPassword = cript.encString(datafetch.password);
        datafetch.password = '';

        const create = await User.CreateUser(datafetch, (err, response) => {
            if(err) throw err;

            res.json(response.insertId);
        });
    }

}

export default new UserConrtoller;