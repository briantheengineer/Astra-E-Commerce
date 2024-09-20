import { useContext, useEffect } from "react"
import { CartContext } from './App'

export default function myCart() {
    const { cart } = useContext(CartContext);

    return (
        <>
            <div>
                <ul>
                    {cart.length > 0 ? (
                        cart.map((i, index) =>
                        <li key={index}>{i.name} - {i.price} - {i.quantity} </li>)
                    ): <li>No Items Added Yet</li>}
                </ul>
            </div>
        </>
    )
}