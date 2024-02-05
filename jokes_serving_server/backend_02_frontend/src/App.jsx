import { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'

function App() {
 const[jokes, setJokes]  = useState([]);

 useEffect (()=>{
    axios.get("/api/jokes")
    .then((response)=>{
      setJokes(response.data);
      console.log("------------------jokes fetched-----------");
    })
    .catch((error) =>{
      console.log(error);
    },[])
 })

  return (
    <>
      <h1>hii</h1>
      <h3>jokes : {jokes.length}</h3>
      {
        jokes.map((jokes) =>(
            <div key = {jokes.id}>
              <h3>title : {jokes.title}</h3>
              <h4>content: {jokes.content}</h4>

            </div>
        ))
      }
    </>
  )
 
}

export default App
