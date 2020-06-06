import multer from "multer";
import { extname, resolve } from "path";

const aleatoria = () => Math.floor(Math.random() * 1000 * 2000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatoria()}${extname(file.originalname)}`);
    },
  }),
};
