import { useContext } from "react"
import { CartContext } from "./App"
import { Link } from "react-router-dom";

export default function BuyCart() {
    const {cart, setCart} = useContext(CartContext);
    return (
        <div className="h-screen min-h-72">
            <div className="p-5 text-center">
            <h1 className="integralBold text-3xl mb-2">YOUR CART</h1>
                {cart.length > 0 ? cart.map(item => 
                <div>
                    <ul className="h-fit flex justify-center">
                        <li className="border content-center justify-center w-2/4 flex">
                            <div className="h-32 w-32"><img className="w-full h-full object-cover" src={item.img} alt="" /></div>
                            <div className="flex flex-wrap border w-fit content-evenly"> 
                                <p className="border w-full h-fit">{item.name} </p>
                                <div className="flex flex-wrap content-around justify-around w-full">
                                    <p>Size: {item.size}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <p className="h-fit ml-0">${item.price}</p>
                                </div>
                            </li>
                    </ul>
                </div>) :
                <div> 
                    <h1 className="text-3xl integralBold">IS EMPTY</h1>
                    <Link to='/clothing'><button className="myBtn IntegralRegular text-white text-lg bg-black px-16 py-2 rounded-full mx-10 tracking-widest my-10">Shop Now</button></Link>
                </div>}
            </div>
        </div>
    )
}