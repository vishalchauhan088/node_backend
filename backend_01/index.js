const express = require('express')
const app = express()
require('dotenv').config()

// to get api data of github users
//https://api.github.com/users/vishalchauhan088
const githubData = {
    "login": "vishalchauhan088",
    "id": 85833548,
    "node_id": "MDQ6VXNlcjg1ODMzNTQ4",
    "avatar_url": "https://avatars.githubusercontent.com/u/85833548?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vishalchauhan088",
    "html_url": "https://github.com/vishalchauhan088",
    "followers_url": "https://api.github.com/users/vishalchauhan088/followers",
    "following_url": "https://api.github.com/users/vishalchauhan088/following{/other_user}",
    "gists_url": "https://api.github.com/users/vishalchauhan088/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vishalchauhan088/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vishalchauhan088/subscriptions",
    "organizations_url": "https://api.github.com/users/vishalchauhan088/orgs",
    "repos_url": "https://api.github.com/users/vishalchauhan088/repos",
    "events_url": "https://api.github.com/users/vishalchauhan088/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vishalchauhan088/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Vishal Chauhan",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": true,
    "bio": "I am 2nd year CSE student of Chandigarh University.",
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-06-13T13:29:42Z",
    "updated_at": "2024-01-25T16:51:36Z"
  }

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

app.get('/github',(req,res) =>{
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})