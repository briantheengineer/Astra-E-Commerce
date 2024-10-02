import PolkaDress from  "/lance-reis-ZLnj8mQrzdw-unsplash.webp" 
import BeigeTop from "/bianca-castillo-gbq6pdUX6EY-unsplash.webp"
import Bikini from "/angelina-litvin--uwPMTAxTig-unsplash.webp"
import Pants from "/michael-afonso-jeEfLVZ5f_s-unsplash.webp" 
import "./ClothingTypes.css"
import { Link } from "react-router-dom"

export default function ClothesTypes() {
    return (
        <div className="w-4/6 h-full mb-10 text-center m-auto">
            <h1 className="integralBold text-4xl my-5">SHOP BY CATEGORY</h1>
            <div className="grid grid-cols-3 myGrid gap-5">
            <Link className="col-start-1 col-end-3" to="/clothing/dress"><div 
                    style={ {backgroundImage: `url(${PolkaDress})`}} 
                    >
                    <h1>Dresses</h1>
                </div></Link>
                <div
                    style={ { backgroundImage: `url(${BeigeTop})`} }
                    className="">
                    <h1>Tops</h1></div>
                <div 
                    style={{ backgroundImage: `url(${Bikini})` }}
                    className="">
                    <h1>Bikinis</h1>
                </div>
                <div
                    style={{ backgroundImage: `url(${Pants})` }}
                    className="col-start-2 col-end-4">
                    <h1>Pants</h1>
                </div>
            </div>
        </div>
    )
}