import { Router } from 'express';

import multer from 'multer';
import path from 'path';
import factory from '../factories';

const multerUploadRoute = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${path.resolve('public/images')}`);
  },
  filename: (req, file, cb) => {    
    cb(null, Date.now() + path.basename(file.originalname));
  },
});

const upload = multer({ storage });

multerUploadRoute.post(
  '/:id',

  upload.single('file'),

  factory.carHandler.uploadImageMulterInfo,

);

export default multerUploadRoute;