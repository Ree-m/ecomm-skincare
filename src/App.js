// import { callActionApi } from 'admin-bro';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import OurStory from './OurStory';

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
      <div className="App">
        <Navbar />
        <div className="content">

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          
          <Routes>
            <Route path="/OurStory" element={<OurStory />} />
          </Routes>

        </div>


      </div>
    </Router>
  )
}

export default App;
