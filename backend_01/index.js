const express = require('express')
const app = express()
require('dotenv').config()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send("www.twitter.com/vishalchauhan0688");

})
app.get('/login',(req, res) =>{
    res.send("<h1>please login</h1>");
})
app.get('/vishal', (req,res) =>{
    res.send("<h2> Hii i am on instagram </h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})