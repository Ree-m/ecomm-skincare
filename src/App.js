// import { callActionApi } from 'admin-bro';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Navbar 
import Navbar from './Navbar';
import Home from './Home';
import Search from './Search';
import Cart from './Cart';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import AddItem from './AddItem';


// import Footer from './Footer.js';


function App() {
// add item
const addItem = (item)=>{
 console.log(item)
}
  //  This is to connect our front end to the express server.
  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    await fetch('http://localhost:9000/main', {
      mode: 'cors'
    })
      .then(res => {
        return res.text()
      })
      .then(data => {

        console.log(data)
      })
      .catch(err => {

        console.log(err)
      })

  }


  async function getData() {
    await fetch('http://localhost:9000/items', {
      mode: 'cors'
    })
      .then(res => {
        return res.text()
      })
      .then(data => {

        console.log(data)
      })
      .catch(err => {

        console.log(err)
      })


  }

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  

  
  // Handle psosts request
  const handleSubmit = (e) => {
     e.preventDefault();
     fetch('http://localhost:9000/items', {
        method: 'POST',
        body: JSON.stringify({
           title: title,
           body: body,
           userId: Math.random().toString(36).slice(2),
        }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
     })
        .then((res) => res.json())
        .then((post) => {
           setPosts((posts) => [post, ...posts]);
           setTitle('');
           setBody('');
        })
        .catch((err) => {
           console.log(err.message);
        });
  };






  return (
    <Router>
      <div className="App" id="outer-container">
        
        <Navbar />
        <AddItem onAdd={addItem}/>
        
        

        <div className="content" id="page-wrap">

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Routes>
            <Route path="/Search" element={<Search />} />
          </Routes>

           <Routes>
            <Route path="/Sign In" element={<SignIn />} />
          </Routes>

          <Routes>
            <Route path="/SignUp" element={<SignUp />} />
          </Routes> 

          <Routes>
            <Route path="/Cart" element={<Cart/>} />
          </Routes> 


        </div>
        {/* <Footer /> */}


      </div>
    </Router>
  )
}

export default App;
