const Controller = require("../../core/Controller")
const { komi } = require("../../config/api")
const axios = require('axios')
class HomeController extends Controller {
  async index () {
    const { request } = this
    const page = request.query.page || 1
    
    let { data } = await axios.get(`${ komi }/komik-terbaru/page/${ page }`)
    let comics = data.mangas
    
    this.view("index", {
        comics: comics
      })
  }
}
module.exports = HomeController