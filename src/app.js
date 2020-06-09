import express from "express";
import dotenv from "dotenv";
import { resolve } from "path";
import cors from 'cors';
import helmet from 'helmet';


dotenv.config();

import "./database";
import homeRoutes from "./routes/home.routes";
import userRoutes from "./routes/users.routes";
import tokenRoutes from "./routes/token.routes";
import alunoRoutes from "./routes/aluno.routes";
import fotoRoutes from "./routes/foto.routes";


const whiteList = [
  'https://locahost:3000'
];

const corsOptions = {
  origin: function (origin, callback) {

    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('not Allowed'));
    }
  }
};
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cor(corsOptions))
    this.app.use(helmet())
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "..", "uploads")));
  }

  routes() {
    this.app.use(homeRoutes);
    this.app.use("/users", userRoutes);
    this.app.use("/tokens", tokenRoutes);
    this.app.use("/alunos", alunoRoutes);
    this.app.use("/fotos", fotoRoutes);
  }
}

export default new App().app;
