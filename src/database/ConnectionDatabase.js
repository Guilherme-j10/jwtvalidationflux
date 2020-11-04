import mysql from 'mysql';

class ConnectionDatabase{

    Connection(){
        const Conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "jwt"
        });

        return Conn;
    }

    StatusDatabase(){
        const conn = this.Connection();

        const verification = conn.connect((error) => {
            if(error){
                console.log('error connection: '+error.stack);
            }

            console.log(`connected as id: ${conn.threadId}`);
        });
    }

}

export default new ConnectionDatabase();