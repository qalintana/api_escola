import multer, { MulterError } from "multer";
import { extname, resolve } from "path";

const aleatoria = () => Math.floor(Math.random() * 1000 * 2000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb(new MulterError("Arquivo precisa ser png ou jpeg"));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads", "images"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatoria()}${extname(file.originalname)}`);
    },
  }),
};
