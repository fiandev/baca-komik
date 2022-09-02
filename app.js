const Express = require("express")
const app = new Express()
app.use(Express.static(__dirname + '/public'))
//app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.set("views", "resources/views/")

exports.app = app