import { useContext, useEffect, useState } from "react"
import { CartContext } from './App'

export default function myCart() {
    const { cart } = useContext(CartContext);

    useEffect(() => {
        console.log(cart)
    })

    return (
        <>
            <div className="h-screen border ">
                <h1>{cart}</h1>
            </div>
        </>
    )
}