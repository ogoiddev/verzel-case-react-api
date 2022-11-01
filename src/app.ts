import cors from 'cors';
import express from 'express';
import 'express-async-errors';

import * as swaggerUi from 'swagger-ui-express';

import helmet from 'helmet';
import errorHandler from './middleware/errorMiddleware';
import Routes from './routes/index';
import swaggerFile from './swaggerApi.json';

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(Routes);

app.use(errorHandler);

app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;
