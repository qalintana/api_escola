class HomeController {
  index(req, res) {
    return res.json({ tudocerto: "tudo caminhando bem" });
  }
}

export default new HomeController();
