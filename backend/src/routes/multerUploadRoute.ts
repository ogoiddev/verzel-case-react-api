import { Router } from 'express';

import multer from 'multer';
import path from 'path';
import factory from '../factories';

const multerUploadRoute = Router();

export default multerUploadRoute;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../../public/images');
  },
  filename: (req, file, cb) => {    
    cb(null, Date.now() + path.basename(file.originalname));
  },
});

const upload = multer({ storage });

multerUploadRoute.post(
  '/upload',

  upload.single('file'),

  factory.carHandler.uploadImageMulterInfo,

);