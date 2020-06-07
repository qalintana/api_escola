import Aluno from "../models/Aluno";
import Foto from "../models/Foto";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      include: [
        {
          model: Foto,
          attributes: ["originalname", "filename"],
        },
      ],
      attributes: ["nome", "sobrenome", "idade"],
      order: [
        ["id", "DESC"],
        [Foto, "id", "DESC"],
      ],
    });
    return res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ["Falta o ID"] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) return res.status(400).json({ errors: ["Aluno não existe"] });

      const novoAluno = await aluno.update(req.body);

      return res.json(novoAluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ["Falta o ID"] });
      }

      const aluno = await Aluno.findByPk(id, {
        include: [
          {
            model: Foto,
            attributes: ["originalname", "filename"],
          },
        ],
        order: [[Foto, "id", "DESC"]],
        attributes: ["nome", "sobrenome", "idade"],
      });

      if (!aluno) return res.status(400).json({ errors: ["Aluno não existe"] });

      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ["Falta o ID"] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) return res.status(400).json({ errors: ["Aluno não existe"] });
      await aluno.destroy();

      return res.json({ apagado: true });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
