import express from "express";
import dotenv from "dotenv";
dotenv.config();

import "./database";
import homeRoutes from "./routes/home.routes";
import userRoutes from "./routes/users.routes";
import tokenRoutes from "./routes/token.routes";
import alunoRoutes from "./routes/aluno.routes";
import fotoRoutes from "./routes/foto.routes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
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
