// import { callActionApi } from 'admin-bro';
import React,{useState,useEffect} from 'react';

function App() {

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
        await fetch('http://localhost:9000/main', {
        mode:'cors'
      })
        .then(res=>{
          return res.text()
        })
        .then(data=>{  
          
          console.log( data)     
           })
        .catch(err=>{

            console.log(err)
        })

    }
    


  return (
    <div className="App">
      <h1>hi1</h1>
      <h2>first try!!!!!</h2>
      
    </div>
  );
}

export default App;
