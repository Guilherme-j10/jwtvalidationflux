import 'dotenv/config';
import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const AuthHeader = req.headers.autorizate;

    if(!AuthHeader) return res.status(401).json('Token not provided in autorizate headers');

    const [ headers, payloadFromHeader, signature ] = AuthHeader.split(' ');

    try {

        const payload = jwt.verify(AuthHeader, process.env.SECRET_KEY);
        
        req.userId = payload.userId;

        next();

    } catch (error) {

        res.json(error);

    }
}