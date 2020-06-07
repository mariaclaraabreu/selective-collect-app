import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.listen(3333);




// CRIAR APLICACAO DO REACTJS
// npx create-react-app web --template=typescript na raiz (web é o nome da pasta)
