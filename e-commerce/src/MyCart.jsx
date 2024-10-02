import { useContext, useState, useEffect } from "react"
import { CartContext } from './App'
import "./MyCart.css"
import { json, Link } from "react-router-dom";

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
                cartItem.id === i.id && cartItem.size === i.size ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
            ).filter(cartItem => cartItem.quantity > 0)
        })
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <div className={`${visibleCart ? "visible" : "hidden"} myCart fixed z-10 max-h-screen right-0 top-20 w-1/6 overflow-clip text-center rounded-md overflow-y-visible`}>
            <div className="h-fit  p-2">
                <button onClick={toggleCart} className=" right-3 fixed border p-1 integralNormal">Close</button>
                <ul className="my-16 border rounded-md">
                    {cart.length > 0 ? (
                        cart.map((i, index) =>
                        <li key={index} className="border text-sm"> - {i.name} <br/> <div className="flex flex-nowrap justify-evenly"><p>${i.price}</p><p>{i.size}</p></div>Quantity:{i.quantity} <button onClick={() => decreaseItem(i)}>REMOVE ITEM</button></li>)
                    ): <li className="integralBold">No Items Added Yet</li>
                    }
                    
                </ul>
                <Link to="/buycart"><button className="border p-2">View Cart ({cart.length}) </button ></Link>
                <button onClick={clearCart} className="text-white integralNormal text-sm">CLEAR CART</button>
            </div>
        </div>
    )
}