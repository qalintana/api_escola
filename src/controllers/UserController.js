import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const { id, nome, email } = await User.create(req.body);
      return res.json({ id, nome, email });
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((error) => error.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["nome", "email"] });
      console.log(req.userId, req.userEmail);
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, { attributes: ["nome", "email"] });
      if (!user) return res.status(404).json(null);
      return res.json(user);
    } catch (error) {
      return res.status(404).json(null);
    }
  }

  async update(req, res) {
    try {
      const { userId } = req;
      const user = await User.findByPk(userId);

      if (!user) return res.status(404).json({ errors: ["User not found"] });

      const userUpdated = await user.update(req.body);
      return res.json(userUpdated);
    } catch (error) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const { userId } = req;
      const user = await User.findByPk(userId);
      await user.destroy();
      return res.json(null);
    } catch (error) {
      return res.json(null);
    }
  }
}

export default new UserController();
