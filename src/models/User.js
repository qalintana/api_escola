import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "O campo deve conter entre 3 a 255 caractres",
            },
            notEmpty: {
              msg: "O Campo nome não pode estar vazio",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          validate: {
            isEmail: {
              msg: "Email Inválido",
            },
          },
          unique: {
            msg: "Email Já existe",
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              msg: "A senha precisa ter entre 6 e 50 caracteres",
            },
          },
        },
      },
      { sequelize }
    );

    this.addHook("beforeSave", async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }
}
