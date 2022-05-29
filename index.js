const express = require('express')
const path = require('path')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')

const PORT = 3000

const app = new express()

mongoose.connect('mongodb://localhost:27017/node-blog', {useNewUrlParser: true})
    .then(() => 'You are now connected to mongo!')
    .catch(err => console.log('Something went wrong', err))

app.use(express.static('public'))

app.use(expressEdge)
app.set('views', __dirname + '/views')

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'pages/index.html'))
// })
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})

app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'))
})

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})