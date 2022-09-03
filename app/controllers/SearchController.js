const Controller = require("../../core/Controller")
const { urlTrim } = require("../helpers/url")
const { komi } = require("../../config/api")
const axios = require('axios')
class SearchController extends Controller {
  async index () {
    const { request } = this
    const query = request.query.q
    const page = request.query.page || 1
    
    if (!query) this.status(404)
    try {
      let queryTrim = urlTrim( query )
      let { data } = await axios.get(`${ komi }/search/${ queryTrim }/?page=${ page }`)
      let comics = data.mangas
      
      /* Exeption query not found */
      if (comics.length < 1) {
        this.view("error", {
          code: 404,
          message: `query ${ query } not found`,
          query: query
        })
      }
      
      this.view("index", {
        comics: comics,
        query: query
      })
      
    } catch (e) {
      this.status(500, e.message)
    }
  }
}

module.exports = SearchController