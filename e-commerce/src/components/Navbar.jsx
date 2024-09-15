import { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"


export default function Navbar() {
    const [isDropped, setIsDropped] = useState(false);

    const toggleDropdown = () => {
        setIsDropped(!isDropped)
    };

    return (
        <div>
            <div className="bg-black text-center max-h-fit">
                <h3 className="text-white">Sign up to get up to 20% off of your first purchase! <u>Sign in now!</u></h3>
            </div>
            
            <div className="navbar border w-full">
                <nav className="flex items-center justify-center space-x-4 flex-nowrap">
                <picture className="h-1/12 w-1/12 min-h-16 min-w-36"> <img className="h-full w-full object-contain" src={Logo} alt="Logo" /></picture>
                <Link to="/landing" />
                    <div>
                        <button onClick={toggleDropdown} className="px-4 link IntegralRegular">Shop</button>
                        <div className={`dropdown-menu ${isDropped ? '' : 'hidden'} fixed border p-2 space-y-2 IntegralRegular`}>
                            <p>Thing 1</p>
                            <p>Thing 2</p>
                        </div>
                    </div>
                    <h2 className="whitespace-nowrap px-4 link IntegralRegular">On Sale</h2>
                    <h2 className="whitespace-nowrap px-4 link IntegralRegular">New Arrivals</h2>
                    <h2 className="px-4 link IntegralRegular">Brands</h2>
                    
                        <form className="border rounded-full p-2 w-4/12 flex flex-nowrap">
                        <svg className="min-w-5 min-h-5 w-5 h-5 mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M24,22.586l-6.262-6.262a10.016,10.016,0,1,0-1.414,1.414L22.586,24ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" stroke="currentColor"/></g></svg>
                            <input placeholder="Search For Products..." className="outline-none IntegralRegular"></input>
                        </form>
                        <svg className="w-7 h-7 m-2 link"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>    
                        <svg className="w-7 h-7 m-2 link" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z"/><circle cx="12" cy="6" r="6"/></svg>
                </nav>
            </div>
        </div>
    )
}

