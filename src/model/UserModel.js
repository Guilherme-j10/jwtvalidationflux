import ConnectionDatabase from '../database/ConnectionDatabase';

class UserModel {

    constructor(){
        this.conn = ConnectionDatabase.Connection();
    }

    CreateUser(dataFetching, callback){
        return this.conn.query('INSERT INTO user SET ?', dataFetching, callback);
    }

    FindUserby(searcher, element, callback){
        return this.conn.query(`SELECT * FROM user WHERE ${element} = "${searcher}"`, callback);
    }

}

export default new UserModel();