import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Matheus',
      sobrenome: 'Orozimbo',
      email: 'matheus@matheus.com',
      idade: 24,
      peso: 99.9,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
