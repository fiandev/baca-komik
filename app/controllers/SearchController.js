const Controller = require("cores/Controller")
const { urlTrim } = require("helpers/url")
const { komi } = require("configs/api")
const axios = require('axios')
class SearchController extends Controller {
  async index () {
    const { request } = this
    const query = request.query.q
    const page = request.query.page || 1
    
    if (!query) this.status(404)
    let queryTrim = urlTrim( query )
    let { data } = await axios.get(`${ komi }/search/${ queryTrim }/?page=${ page }`)
    let comics = data.mangas
    this.view("index", {
        comics: comics,
        query: query
      })
  }
}

module.exports = SearchController