import express from 'express';
import rotas from './routes';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(rotas);

app.listen(3333, () => {
    console.log('http://localhost:3333');
});