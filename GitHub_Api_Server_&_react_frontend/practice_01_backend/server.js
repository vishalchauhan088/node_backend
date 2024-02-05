import express from 'express';
import 'dotenv/config'


const githubApi =  {
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

// const githubApi = ["apple","mango","pomegranate","orange","pineapple"];


const port = process.env.PORT || 4000

const app = express();

// Github api



app.get('/', (req, res) =>{
    
    res.send("Welcome to home route");
})

app.get('/api/github', (req, res) =>{
    res.send(githubApi);
})


app.listen(port, () =>{
    console.log(`practice_01 app listening on port : ${port}`);
})


