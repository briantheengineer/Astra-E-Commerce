import { useContext, useState, useEffect } from "react"
import { CartContext } from './App'
import "./MyCart.css"
import { json } from "react-router-dom";

export default function myCart({toggleCart, visibleCart}) {
    const { cart, setCart } = useContext(CartContext);

    useEffect( () => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, [setCart]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);

    const decreaseItem = (i) => {
        setCart(prevCart => {
            return prevCart.map(cartItem =>
                cartItem.id === i.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
            )
            .filter(cartItem => cartItem.quantity > 0)
        })
    }

    return (
        <div className={`${visibleCart ? "visible" : "hidden"} myCart fixed z-10 max-h-screen right-0 top-20 w-1/6 overflow-clip text-center`}>
            <div className="h-fit  p-2">
                <button onClick={toggleCart} className=" mb-4 right-3 fixed border p-1">Close</button>
                <ul className="my-10">
                    {cart.length > 0 ? (
                        cart.map((i, index) =>
                        <li key={index} className="border"> {index + 1}. {i.name} <br></br> ${i.price}  {i.quantity} item <button onClick={() => decreaseItem(i)}>-</button></li>)
                    ): <li>No Items Added Yet</li>
                    }
                    
                </ul>
                <button className="border p-2">View Cart ({cart.length}) </button >
            </div>
        </div>
    )
}