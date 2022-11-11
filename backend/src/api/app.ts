import cors from 'cors';
import express, { Request, Response } from 'express';
import 'express-async-errors';

import swaggerUi from 'swagger-ui-express';
import helmet from 'helmet';

import multer from 'multer';
import path from 'path';
import errorHandler from '../middleware/errorMiddleware';
import Routes from '../routes/index';
import swaggerFile from '../swagger_output.json';

const app = express();

app.use(cors());
app.use(helmet());

app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {    
    cb(null, Date.now() + path.basename(file.originalname));
  },
});

const upload = multer({ storage });

app.post(
  '/upload',

  upload.single('file'),

  async (req: Request, res: Response) => {
    res.json({
      upload: true,
      files: req.file,
    });
  },
);

app.use(Routes);

app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.static('public'));

app.use(errorHandler);

app.use('/', (_req: Request, res: Response) =>
  res.json('Visite a documentação da API no endpoint /api/doc e bons estudos'));

export default app;
