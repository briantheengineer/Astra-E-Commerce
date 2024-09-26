import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ref, query, orderByChild, equalTo, get } from 'firebase/database';
import { database } from './firebaseConfig'; 

function ClothingCategory() {
  const { category } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const dbRef = ref(database, 'products');
      const productQuery = query(dbRef, orderByChild('category'), equalTo(category));

      try {
        const snapshot = await get(productQuery);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setProducts(Object.values(data)); 
        } else {
          setProducts([]); 
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]); 

  return (
    <div>
      <h1>Category: {category}</h1>
      <div>
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default ClothingCategory;
