import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import ProductDetail from './productInfo'
import Landing from './Landing';
import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const cart = createContext([])

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/item/:id" element={<ProductDetail />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;