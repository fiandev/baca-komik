const Controller = require("cores/Controller")
const { komi } = require("configs/api")
const axios = require('axios')
class DetailController extends Controller {
  async index () {
    const { request } = this
    const slug = request.params.slug
    if (!slug) {
      this.status(404)
    }
    let { data } = await axios.get(`${ komi }/komik/${ slug }`)
    let comic = data
    
    this.view("detail", {
        comic: comic
      })
  }
}
module.exports = DetailController