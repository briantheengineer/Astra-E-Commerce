import { useContext } from "react"
import { CartContext } from "./App"
import { Link } from "react-router-dom";

export default function BuyCart() {
    const {cart, setCart} = useContext(CartContext);
    return (
        <div className="h-full min-h-72">
            <div className="p-5 text-center">
                {cart.length > 0 ? cart.map(item => <div>
                <ul>
                <li>{item.name}</li> <li>{item.price}</li>
                </ul>
                </div>) :
                <div> 
                    <h1 className="text-3xl integralBold">NO ITEMS ON YOUR CART</h1>
                    <Link to='/clothing'><button className="myBtn IntegralRegular text-white text-lg bg-black px-16 py-2 rounded-full mx-10 tracking-widest my-10">Shop Now</button></Link>
                </div>}
            </div>
        </div>
    )
}