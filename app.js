const express = require('express')
const path = require('path')
const app = express()
const router  = require('./public/routes/router')
const exphbs = require('express-handlebars')
app.set('view engine','handlebars')
app.engine('handlebars',exphbs())
app.use(express.static(path.join(__dirname,'public')))
app.set('views', path.join(__dirname, './public/views'));
app.use(router)
const { connectServer, giveMeDB } = require('./public/db/mongodb');
connectServer().then(()=> {
    app.listen(3000,()=>{
        console.log('Listening on 3000')
    })


} )
