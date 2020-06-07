import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import Aluno from "../models/Aluno";
import User from "../models/User";
import Foto from "../models/Foto";

const models = [Aluno, User, Foto];
class DatabaseConnection {
  constructor() {
    this.connection = new Sequelize(databaseConfig);
    this.loadModels();
    this.loadAssociations();
  }

  loadModels() {
    models.forEach((model) => model.init(this.connection));
  }

  loadAssociations() {
    models.forEach(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

new DatabaseConnection();
