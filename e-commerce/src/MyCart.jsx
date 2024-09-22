import { useContext, useState, useEffect } from "react"
import { CartContext } from './App'

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
        <div className={`${visibleCart ? "visible" : "hidden"} m-5 fixed z-10 max-h-screen right-0 top-1/2 w-1/6 p-2 overflow-clip `}>
            <div>
                <button onClick={changeVisibility} className="">Close</button>
                <ul>
                    {cart.length > 0 ? (
                        cart.map((i, index) =>
                        <li key={index}>{i.name} - {i.price} - {i.quantity} <button onClick={decreaseItem}>hello</button></li>)
                    ): <li>No Items Added Yet</li>
                    }
                    
                </ul>
            </div>
        </div>
    )
}