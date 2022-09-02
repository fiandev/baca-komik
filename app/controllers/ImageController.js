const download = require('image-downloader')
const Controller = require("../../core/Controller")

class ImageController extends Controller {
  async index() {
    const { request, response } = this
    const url = request.query.url
    if (!url) {
      this.status(403)
    }
    try {
      let options = {
        url: url,
        dest: '../../public/images/'
      }
      
      await download.image(options)
        .then(({ filename }) => {
          console.log("[!] "+filename);
          return this.raw(filename)
        })
      .catch((err) => console.error(err))
    } catch (err) {
      return this.status(500)
    }
  }
}

module.exports = ImageController