import './App.css'
import MyCart from './MyCart'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import ProductDetail from './productDetail'
import Landing from './Landing';
import React, { createContext, useState }  from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export const CartContext = createContext([])

function App() {
  const [cart, setCart] = useState([]);
  const [toggleVisibility, setToggleVisibility] = useState(false)

  const setVisibility = () => {
    setToggleVisibility(prevState => !prevState)
  }

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <Navbar toggleCart={setVisibility} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/item/:id" element={<ProductDetail />} />
        </Routes>
        {toggleVisibility && <MyCart toggleCart={setVisibility} visibleCart={toggleVisibility} />}
      <Footer />
    </CartContext.Provider>
  );
}

export default App;