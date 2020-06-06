import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import Aluno from "../models/Aluno";
import User from "../models/User";

const models = [Aluno, User];
class DatabaseConnection {
  constructor() {
    this.connection = new Sequelize(databaseConfig);
    this.loadModels();
  }

  loadModels() {
    models.forEach((model) => model.init(this.connection));
  }
}

new DatabaseConnection();
