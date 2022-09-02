class Controller {
    constructor(req, res, next) {
        this.response = res
        this.request = req
        //this.next = next
        next()
    }
    
    view(path, data) {
        const { response } = this
        
        response.render(path, data)
    }
    
    error(data, statusCode = 200) {
      const { response } = this
      
      response.status(statusCode).json(data)
    }
    status(statusCode) {
      const { response } = this
      
      response.status(statusCode)
    }
    raw(url, statusCode = 200) {
      const { response } = this
      response.status(statusCode).sendFile(url)
    }
}

module.exports = Controller
