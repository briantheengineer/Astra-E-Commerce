import { useContext, useState, useEffect } from "react"
import { CartContext } from './App'
import "./MyCart.css"
import { json, Link } from "react-router-dom";

export default function myCart({toggleCart, visibleCart}) {
    const { cart, setCart } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = () => {
        const total = cart.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);
        setTotalPrice(total);
    };

    useEffect(() => {
        calculateTotalPrice();
    }, [cart]);

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

    const increaseItem = (i) => {
        setCart(prevCart => {
            return prevCart.map(
                cartItem => cartItem.id === i.id && cartItem.size === i.size ? {...cartItem, quantity: cartItem.quantity + 1  } : {}
            )
        })
    }


    const removeItem = (i) => {
        setCart(prevCart => {
            return prevCart.filter(cartItem =>
                !(cartItem.name === i.name && cartItem.size === i.size)  
            )})
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <div className={`${visibleCart ? "visible" : "hidden"} myCart fixed z-10 max-h-screen right-0 top-20 w-1/6 overflow-clip text-center rounded-md overflow-y-visible`}>
            <div className="h-fit  p-2">
                <button onClick={toggleCart} className=" right-3 fixed border p-1 integralNormal">Close</button>
                <ul className="my-16 border rounded-md font-semibold">
                    {cart.length > 0 ? (
                        cart.map((i, index) =>
                        <li key={index} className="text-sm overflow-hidden">
                            <button className=" text-red-950 fixed p-1 border right-2" onClick={() => removeItem(i)}>X</button>
                            <div className="flex flex-nowrap px-2 mt-4">
                                <div className="h-32  w-fit"><img className="h-full w-full object-contain" src={i.img} alt="" /></div>
                             <div className="self-center">
                                <h3>{i.name}</h3> <br/>
                                <div className="flex flex-nowrap justify-evenly"><p>{i.size}</p><p>${i.price}</p></div>
                               <div className="flex flex-nowrap justify-evenly">Qnt: <button className="border rounded-full h-5 w-5" onClick={() => increaseItem(i)}>+</button>{i.quantity}<button className="border h-5 w-5 rounded-full" onClick={() => decreaseItem(i)}>-</button></div> 
                             </div>   
                            </div> 
                        </li>)
                    ): <li className="integralBold">No Items Added Yet</li>
                    }
                    {}
                </ul>
                <div className="font-extrabold">Subtotal: {totalPrice.toFixed(2)}</div>
                <Link to="/buycart"><button className="border p-2 font-bold">View Cart ({cart.length}) </button ></Link>
                <button onClick={clearCart} className="text-stone-50 integralNormal text-sm underline w-full">CLEAR CART</button>
            </div>
        </div>
    )
}