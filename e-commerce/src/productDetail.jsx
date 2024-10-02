import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { CartContext } from './App';
import './productDetail.css'

const ProductDetail = ({toggleCart}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Medium');
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "Clothes", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          console.log(productSnap.data()); 
          setProduct(productSnap.data());
        } else {
          console.log("No product found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const addToCart= () => {
    setCart( 
      prevCart => {
        const itemExists = prevCart.find(cartItem => cartItem.id === product.id && cartItem.size === selectedSize);

        if (itemExists) {
          return prevCart.map(cartItem => 
            cartItem.id === product.id && cartItem.size === selectedSize ? {...cartItem, quantity: cartItem.quantity + count}
            : cartItem
          );
        }
        else {
          return [...prevCart, {...product, quantity: count, size: selectedSize}]
        }
      }
    )
  }

  function addNumber() {
    setCount(count + 1 )
  }

  function subNumber() {
    if (count > 1) {
      setCount(count - 1)
    }
    
  }

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  function btnFunctions() {
    toggleCart();
    addToCart();
  }

  return (
    <div className='h-100 h-full flex flex-nowrap justify-center m-8 border p-5'>
        
      <div className='max-w-72'><img className='w-full h-full object-cover rounded-2xl' src={product.img} alt={product.name} /></div>
      <div className='border mg-5 p-5 flex flex-col justify-around'>
        <h1 className='integralBold text-2xl'>{product.name}</h1>
        <p className='text-xl text-right'>${product.price}</p>
        <p className='integralNormal text-gray-500 text-sm'>{product.description}</p>
        <hr className='bg-gray-500 '></hr>
        <div>
          <p className='integralNormal text-gray-500 text-xs mb-3'>Choose Size</p>
          <div className='flex flex-nowrap itemSize'>
          <select value={selectedSize} onChange={handleSizeChange} className='border p-2'>
              <option value='Small'>Small</option>
              <option value='Medium'>Medium</option>
              <option value='Large'>Large</option>
              <option value='X Large'>X Large</option>
            </select>
          </div>
        </div>
            <div className='flex flex-nowrap'>
                <div className='flex flex-nowrap mr-5 itemCounter'>
                    <button className='text-2xl border' onClick={subNumber}>-</button>
                    <p className='text-2xl'>{count}</p>
                    <button className='text-2xl border' onClick={addNumber}>+</button>
                </div>
                <button onClick={btnFunctions} className='text-center border px-10 integralBold cartBtn '>Add to Cart</button>
            </div>
      </div>
      
      
    </div>
  );
};

export default ProductDetail;
