import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Profile} from "./pages/Profile";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/profile/:name" element={<Profile/>}/>

                  <Route path="*" element={<Home/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
