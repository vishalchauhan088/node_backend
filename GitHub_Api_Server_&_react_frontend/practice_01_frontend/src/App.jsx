import { useState, useEffect } from 'react'

import axios from 'axios';

import './App.css'

function App() {
  const [githubData, setGithubData] = useState([]);

  useEffect(()=>{

    axios.get("/api/github")
    .then( response =>{
      setGithubData(response.data);
      console.log("-----------api----------- fetched");
      
    })
    .catch(error =>{
      console.log(error);
    })
  },[]);

  return (
    <>
      <h1>hello there !!! </h1>
      <img src={githubData['avatar_url']}></img>
      <h3>User Name : {githubData['login']}</h3>
      <h3>Name : {githubData['name']}</h3>
      <h3>About : {githubData['bio']}</h3>
      

      
    </>
  )
}

export default App
