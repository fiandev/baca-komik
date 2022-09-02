const Controller = require("cores/Controller")
const { komi } = require("configs/api")
const axios = require('axios')
class ReadController extends Controller {
  async index () {
    const { request } = this
    const slug = request.params.slug
    if (!slug) {
      this.status(404)
    }
    let { data } = await axios.get(`${ komi }/chapter/${ slug }`)
    let comic = data
    
    this.view("read", {
        comic: comic
      })
  }
}
module.exports = ReadController