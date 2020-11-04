import { Router } from 'express';
const rotas = Router();

import AuthMiddleware from './middleware/auth';
import ConnectionDatabase from './database/ConnectionDatabase';
import UserController from './controller/UserController';
import ValidateController from './controller/ValidateController';
import TestController from './controller/TestController';

rotas.get('/satusdatabase', AuthMiddleware, (req, res) =>{ // tambem posso deixar apenas umas rota sendo validada passando o middleware direto nela
    res.json(ConnectionDatabase.StatusDatabase());
});

rotas.use(AuthMiddleware); //todas as rotas abaixo deste use serão validadas

rotas.get('/myposts', TestController.UserOnRoute);
rotas.post('/User', UserController.InsertUser);
rotas.post('/SessionValidate', ValidateController.validate);

export default rotas;