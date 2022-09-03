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
    status(statusCode, message = "error") {
      const { response } = this
      
      this.view("error", {
        code: statusCode,
        message: message,
      })
    }
    raw(url) {
      const { response } = this
      response.sendFile( url )
    }
}

module.exports = Controller
