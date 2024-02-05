import express from 'express'


import 'dotenv/config'


const app = express();

const port = process.env.PORT || 4000;

const jokes = [
    {
      "id": 1,
      "title": "The Mathematician's Fruit",
      "content": "Why was the equal sign so humble? It knew it wasn't less than or greater than anyone else, just equal."
    },
    {
      "id": 2,
      "title": "The Coffee Java",
      "content": "Why do Java developers wear glasses? Because they don't see sharp."
    },
    {
      "id": 3,
      "title": "The Code in the Restaurant",
      "content": "A SQL query walks into a restaurant, walks up to two tables, and asks, 'Can I join you?'"
    },
    {
      "id": 4,
      "title": "The Programmer's Pet",
      "content": "Why did the programmer get thrown out of school? Too much recursion."
    },
    {
      "id": 5,
      "title": "The Programming Language Party",
      "content": "Why don't programmers like nature? It has too many bugs."
    }
  ]

app.get('/',(req,res)=>{
    res.send("<h1> This is home route </h1>");
})

app.get('/api/jokes', (req,res) =>{
    res.send(jokes);
})

app.listen(port,() =>{
    console.log(`app running on port : ${port}`);
} )