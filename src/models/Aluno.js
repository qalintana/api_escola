import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "O Nome precisa ter entre 3 a 255 caractes",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "O sobrenome precisa ter entre 3 a 255 caractes",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: { msg: "Email ja existe" },
          validate: {
            isEmail: {
              msg: "O Email é obrigatório",
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "precisa ser um numero inteiro",
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Precisa ser um numero inteiro ou de ponto flutuante",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }
}
