import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './productInfo.css'

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
    <div className='h-100 h-full flex flex-nowrap justify-center m-10'>
        
      <div className='max-w-72'><img className='w-full h-full object-cover rounded-2xl' src={product.img} alt={product.name} /></div>
      <div className='border mg-5 p-5'>
        <h1 className='integralBold text-2xl'>{product.name}</h1>
        <p className='text-xl '>${product.price}</p>
        <p className='integralNormal text-gray-500 text-sm'>{product.description}</p>
        <hr className='bg-gray-500 '></hr>
        <p className='integralNormal text-gray-500 text-xs '>Choose Size</p>
        <div className='flex flex-nowrap itemSize'>
            <button>Small</button>
            <button>Medium</button>
            <button>Large</button>
            <button>X-Large</button>
        </div>
            <div className='flex flex-nowrap'>
                <div className='flex flex-nowrap mr-5'>
                    <button>+</button>
                    <p>0</p>
                    <button>-</button>
                </div>
                <button className='text-center border px-10 integralBold '>Add to Cart</button>
            </div>
      </div>
      
      
    </div>
  );
};

export default ProductDetail;
