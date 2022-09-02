const Express = require('express')
const router = Express.Router()

const HomeController = require("controllers/HomeController")
const ReadController = require("controllers/ReadController")
const DetailController = require("controllers/DetailController")
const SearchController = require("controllers/SearchController")

const ImageController = require("controllers/ImageController")

const { log } = require('middleware/logging')
class Route {
    init() {
        return [
            this.get('/', (req, res, next) => new HomeController(req, res, next).index()),
            this.get('/detail/komik/:slug', (req, res, next) => new DetailController(req, res, next).index()),
            this.get('/read/:slug', (req, res, next) => new ReadController(req, res, next).index()),
            this.get('/search', (req, res, next) => new SearchController(req, res, next).index()),
            
            
            this.get('/thumb', (req, res, next) => new ImageController(req, res, next).index())
            
        ]
    }

    // eslint-disable-next-line class-methods-use-this
    get(...args) {
        args.push(log)
        return router.get(...args)
    }
}

exports.Route = Route