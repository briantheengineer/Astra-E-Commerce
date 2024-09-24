import { useContext, useState, useEffect } from "react"
import { CartContext } from './App'
import "./MyCart.css"
import { json } from "react-router-dom";

export default function myCart() {
    const { cart, setCart } = useContext(CartContext);
    const [visibleCart, setVisibleCart] = useState(false)

    const changeVisibility = () => {
        setVisibleCart(!visibleCart)
    }

    const cartFilled = () => { 
    if(cart.length > 0) {
        setVisibleCart(true)
    }
    else (
        setVisibleCart(false)
    )
}
    useEffect( () => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    useEffect(() => { 
        cartFilled()}, [cart])


    const decreaseItem = (i) => {
        setCart(prevCart => {
            return prevCart.map(cartItem =>
                cartItem.id === i.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
            )
            .filter(cartItem => cartItem.quantity > 0)
        })
    }

    return (
        <div className={`${visibleCart ? "visible" : "hidden"} m-5 fixed z-10 max-h-screen right-0 top-1/2 w-1/6 p-2 overflow-clip`}>
            <div className=" bg-slate-600  p-2">
                <button onClick={changeVisibility} className=" ml-auto ">Close</button>
                <ul className="text-center">
                    {cart.length > 0 ? (
                        cart.map((i, index) =>
                        <li key={index}> {index + 1}. {i.name} <br></br> ${i.price}  {i.quantity} item <button onClick={decreaseItem}>-</button></li>)
                    ): <li>No Items Added Yet</li>
                    }
                    
                </ul>
                <button className="border p-2">View Cart ({cart.length}) </button >
            </div>
        </div>
    )
}