import cors from 'cors';
import express from 'express';
import 'express-async-errors';

import * as swaggerUi from 'swagger-ui-express';

import helmet from 'helmet';
import errorHandler from './middleware/errorMiddleware';
import swaggerFile from './swaggerApi.json';

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(errorHandler);

app.use('/test', (req: Request, res: Response) =>
  res.json('API Connected - APP listen'));

app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;
