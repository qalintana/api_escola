import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Queiroz",
      sobrenome: "Santana",
      email: "alintana22@gmail.com",
      idade: 24,
      peso: 1.92,
    });
    return res.json({ novoAluno });
  }
}

export default new HomeController();
