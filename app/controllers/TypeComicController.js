const Controller = require("../../core/Controller")
const { komi } = require("../../config/api")
const axios = require('axios')

class TypeComicController extends Controller {
  async index() {
    const { request } = this
    const page = request.query.page || 1
    const type = request.params.type
    if (!type) this.status(404)
    try {
      let { data } = await axios.get(`${ komi }/komikk/${ type }/page/${ page }`)
      let comics = data.mangas
      
      this.view("index", {
        comics: comics,
        type: data.type
      })
    } catch (e) {
      this.status(500)
    }
  }
}

module.exports = TypeComicController