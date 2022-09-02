require('module-alias/register')
const device = require('express-device');
const { Route } = require('cores/Route')
const { app } = require('./app')
class App extends Route {
    init() {
        const port = process.env.PORT || 3000
        app.use(device.capture());
        // register router
        app.use('/', super.init())
        
        app.use('*',(req,res) =>{
            res.send({
                status: 404,
                message: "not found"
            })
        })
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    }
}


new App().init()