import cors from 'cors';
import express, { Request, Response } from 'express';
import 'express-async-errors';

import swaggerUi from 'swagger-ui-express';
import helmet from 'helmet';
import multer from 'multer';
import errorHandler from './middleware/errorMiddleware';
import Routes from './routes/index';

import swaggerFile from './swagger_output.json';

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(Routes);

const upload = multer({
  dest: './public/uploads/imgs',
});

app.post(
  '/upload',
  
  upload.array('file'),

  async (req: Request, res: Response) => {
    console.log(req.files);
    const qt = req.files || '';
    
    console.log(`Files received: ${qt.length}`);

    res.send({
      upload: true,
      files: req.files,
    });
  },
);

app.use(express.static('public'));

app.use(errorHandler);

app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/', (_req: Request, res: Response) =>
  res.json('Visite a documentação da API no endpoint /api/doc e bons estudos'));

export default app;
