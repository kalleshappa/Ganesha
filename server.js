if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// require('dotenv').config()
const express = require('express')
const app = express()
const expresslayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
// const mongoose = require('mongoose')



// mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection
// db.on('error', (error)=> console.log(error))
// db.once('open', ()=>console.log('connected to database'))

// app.use(express.json())

// const subscribersRouter = require('./routes/subscribers')
// app.use('/subscribers', subscribersRouter)

// app.listen(3000, () => console.log('server started'));

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expresslayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongoose'))



app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)
