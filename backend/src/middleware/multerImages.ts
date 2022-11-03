// eslint-disable-next-line import/no-import-module-exports
import multer from 'multer';

module.exports = (multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/upload-car-imgs');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now().toString()}_${file.originalname}`);
    },
  }),
  fileFilter: (res, file, cb) => {
    const validFormat = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
    if (validFormat.includes(file.originalname)) {
      return cb(null, true);
    }
    return cb(null, false);
  },

}));