class GeeController {
  static async getGee(req, res, next) {
    const hello = "Hello World";
    res.status(200).json(hello);
  }
}

module.exports = GeeController;
