import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
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
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;