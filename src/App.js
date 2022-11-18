// import { callActionApi } from 'admin-bro';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Navbar 
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import OurStory from './OurStory';
import Search from './Search';
import Cart from './Cart';
// import Sidebar from './Sidebar';



function App() {

  //  This is to connect our front end to the express server.
  // useEffect(() => {
  //   getData()
  // }, [])

  // async function getData() {
  //   await fetch('http://localhost:9000/main', {
  //     mode: 'cors'
  //   })
  //     .then(res => {
  //       return res.text()
  //     })
  //     .then(data => {

  //       console.log(data)
  //     })
  //     .catch(err => {

  //       console.log(err)
  //     })

  // }



  return (
    <Router>
      <div className="App" id="outer-container">
        <Navbar />

        <div className="content" id="page-wrap">

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Routes>
            <Route path="/Shop" element={<Shop />} />
          </Routes>
          
          <Routes>
            <Route path="/OurStory" element={<OurStory />} />
          </Routes>

          <Routes>
            <Route path="/Search" element={<Search />} />
          </Routes>

          <Routes>
            <Route path="/Cart" element={<Cart/>} />
          </Routes>




        </div>


      </div>
    </Router>
  )
}

export default App;
