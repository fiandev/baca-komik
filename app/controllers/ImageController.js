const download = require('image-downloader')
const Controller = require("../../core/Controller")

class ImageController extends Controller {
  async index() {
    const { request, response } = this
    const url = request.query.url
    
    if (!url) this.status(403, "forbidden")
    
    try {
      let options = {
        url: url,
        dest: '../../public/images/'
      }
      
      await download.image(options)
        .then(({ filename }) => {
          let file = filename.split("/")
          console.log("[!] "+ filename);
          response.redirect(`/images/${ file[ file.length - 1] }`)
        })
      .catch((err) => console.error(err))
    } catch (e) {
      this.status(500, e.message)
    }
  }
  async show() {
    const { response, request } = this
    const filename = request.params
    try {
      response.sendFile(`../../images/${ filename }`)
    } catch (e) {
      this.status(404, "not found")
    }
  }
}

module.exports = ImageController