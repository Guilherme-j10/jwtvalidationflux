import UserModel from '../model/UserModel';

class TestController {

    UserOnRoute(req, res){
        UserModel.FindUserby(req.userId, 'id', (err, response) => {
            if(err) throw err;

            res.json({
                name: response[0].name,
                email: response[0].email
            });
        })
    }

}

export default new TestController();