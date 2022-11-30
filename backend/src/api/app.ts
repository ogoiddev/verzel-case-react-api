import cors from 'cors';
import express, { Request, Response } from 'express';
import 'express-async-errors';

import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';

import errorHandler from '../middleware/errorMiddleware';
import Routes from '../routes/index';
import swaggerFile from '../swagger_output.json';

const app = express();

app.use(cors());
app.use(helmet({
  crossOriginResourcePolicy: false,
}));

app.use(express.json());

app.use(Routes);

app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.static('public'));
// app.use('/files', express.static(path.resolve(__dirname, 'public', 'images')));

app.use(errorHandler);

app.use('/', (_req: Request, res: Response) =>
  res.json('Visite a documentação da API no endpoint /api/doc e bons estudos'));

export default app;
