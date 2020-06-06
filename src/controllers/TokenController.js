import jwt from "jsonwebtoken";

import User from "../models/User";

class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = req.body;

    if (!email || !password)
      return res.status(401).json({
        errors: ["credenciais inválidas"],
      });

    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(401).json({
        errors: ["usuario nao existe"],
      });

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ["Senhas inválidas"],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
