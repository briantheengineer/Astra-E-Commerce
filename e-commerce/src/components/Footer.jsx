import './Footer.css'
export default function Footer() {
    function alertMessage() {
        alert("Thank You for Subscribing")
    }
    return (
        <div className='flex flex-wrap justify-center border-t-gray-400 '>
            <div className="h-32 w-4/6 border flex justify-evenly items-center rounded-3xl bg-black p-3">
                <h1 className='text-white integralBold text-3xl'>STAY UP TO DATE ABOUT <br />OUR LATEST OFFERS</h1>
                <form className="flex flex-wrap h-full max-w-80 ">
                    <input className="border w-full text-center p-1 mb-1 rounded-full integralNormal" type="email" placeholder="Enter Your Email" />
                    <button onClick={alertMessage} className="w-full border p-1 mt-1 rounded-full bg-white integralNormal">Subscribe to Newsletter</button>
                </form>
            </div>
            <div className="flex flex-nowrap border-t border-black -mt-2 ">
                <div className="footerCards">
                    <h1 className='integralBold text-3xl'>ASTRA</h1>
                    <h3 className='integralNormal text-gray-500 text-sm mt-3 '>We have clothes that suits your style and which  your're proud to wear.</h3>
                    <div className="socials"></div>
                </div>
                <div className='footerCards'>
                    <h2 className='integralNormal'>COMPANY</h2>
                    <p className='footerInfo'>About</p>
                </div>
                <div className='footerCards'>
                    <h2 className='integralNormal'>HELP</h2>
                    <p>Customer Support</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
                <div className='footerCards'>
                    <h2 className='integralNormal'>FAQ</h2>
                    <p>Account</p>
                    <p>Manage Deliveries</p>
                    <p>Orders</p>
                </div>
            </div>
        </div>
    )
}