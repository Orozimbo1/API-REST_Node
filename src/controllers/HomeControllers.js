class HomeController {
  index(req, res) {
    res.send('Tudo certo');
  }
}

export default new HomeController();
