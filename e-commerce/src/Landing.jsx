import Model from "../public/model-frontpage.jpg"
import "./Landing.css"
export default function Landing() {
    return (
        <>
            <div id="landingDiv" className="border w-100 relative">
                <div className="absolute position z-10">
                    <div className="lg:w-4/6 md:w-3/6 sm:w-3/6">
                        <h1 className="lg:text-8xl md:text-6xl IntegralBold">FIND CLOTHES <br/> THAT MATCH <br /> YOUR STYLE</h1>
                        <h4 className="my-8 text-gray-500 IntegralRegular text-sm">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style</h4>
                        <button className="IntegralRegular text-white text-lg bg-black px-16 py-2 rounded-full mb-10 mx-10 tracking-widest">Shop Now</button>
                    <div className="flex flex-nowrap justify-around boxes">
                        <div>
                            <h1>200</h1>
                            <h4>Internacional Brands</h4>
                        </div>
                        <div>
                            <h1>2,000</h1>
                            <h4>High Quality Products</h4>
                        </div>
                        <div>
                            <h1>30,000</h1>
                            <h4>Happy Customers</h4>
                        </div>
                    </div>
                    
                    </div>
                </div>
                <img className="modelImg text-lg w-screen object-cover absolute " src={Model} alt="" />
            </div>
            <div>
                <h1>Buy NOw</h1>
            </div>
        </>
    )
}