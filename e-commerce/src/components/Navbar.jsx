import { useState } from "react"

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
            
            <div className="navbar border flex">
                <picture> <img /></picture>
                <nav className="flex">
                    <h2 className="mx-2">Shit</h2>
                    <div>
                        <button onClick={toggleDropdown}>Shop</button>
                        <div className={`dropdown-menu ${isDropped ? '' : 'hidden'}`}>
                            <p>Thing 1</p>
                            <p>Thing 2</p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

