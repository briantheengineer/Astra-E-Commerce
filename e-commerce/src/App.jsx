import './App.css'
import Navbar from './components/Navbar'
import Landing from './Landing';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
            <Route path="/landing"> <Landing /> </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
