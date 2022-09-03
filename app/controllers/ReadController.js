const Controller = require("../../core/Controller")
const { komi } = require("../../config/api")
const axios = require('axios')
class ReadController extends Controller {
  async index () {
    const { request } = this
    const slug = request.params.slug
    if (!slug) {
      this.status(404)
    }
    try {
      let { data } = await axios.get(`${ komi }/chapter/${ slug }`)
      let comic = data
      
      this.view("read", {
        comic: comic
      })
      
    } catch (e) {
      this.status(500, e.message)
    }
  }
}
module.exports = ReadController