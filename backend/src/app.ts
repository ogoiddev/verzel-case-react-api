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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../../public/upload/car-imgs');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now().toString()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post(
  '/',
  upload.array('file', 10),

  async (req: Request, res: Response) => {
    console.log(`Files received: ${req.files?.length}`);

    res.json({
      upload: 'ta dificil',
      files: req.files,
    });
  },
);

app.use(Routes);

app.use(errorHandler);

app.use(express.static('public'));

app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/', (_req: Request, res: Response) =>
  res.json('Visite a documentação da API no endpoint /api/doc e bons estudos'));

export default app;
