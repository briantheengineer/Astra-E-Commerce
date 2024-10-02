import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { firestore } from './firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore"; 

function ClothingCategory() {
  const { category } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const q = query(
        collection(firestore, 'Clothes'), 
        where('category', '==', category) 
      );
  
      try {
        const querySnapshot = await getDocs(q); 
        const productsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); 
        setProducts(productsArray); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, [category]); 
  

  return (
    <div  className='h-screen text-center p-3'>
    <div>
      <h1 className='integralBold text-2xl'>{category}</h1>
      <div className='flex justify-center'>
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="border p-5 m-2 card overflow-hidden rounded-lg">
              <h2 className="integralNormal text-sm w-full border">{product.name}</h2>
              <p className='font-bold'>Price: ${product.price}</p>
              <img src={product.img} />
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
    </div>
  );
}

export default ClothingCategory;
