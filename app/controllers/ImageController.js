const Controller = require("cores/Controller")

class ImageController extends Controller {
  async index() {
    const { request, response } = this
    const url = request.query.url
    if (!url) {
      this.status(403)
    }
    this.raw(url)
  }
}

module.exports = ImageController