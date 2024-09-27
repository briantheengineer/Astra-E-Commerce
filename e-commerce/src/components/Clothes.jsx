import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; 
import { collection, getDocs } from "firebase/firestore"; 
import { Link } from "react-router-dom";
import "./Clothes.css";

export default function Clothes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Clothes"));
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setData(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center my-5 border arrivalHeight overflow-hidden">
      <h1 className="integralBold text-4xl">New Arrivals</h1>
      <div>
        <ul className="flex flex-wrap content-center justify-center myCard">
          {data.map((item) => (
            <div key={item.id} className="border p-5 m-2 card overflow-hidden rounded-lg">
              <Link to={`/item/${item.id}`}>
                <li className="relative">
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="flex flex-wrap justify-center">
                    <h1 className="integralNormal text-sm w-full border">{item.name}</h1>
                    <h4 className=" w-full font-bold ">${item.price}</h4>
                    <p className="mt-2 font-medium underline viewProduct">View Product</p>
                  </div>
                 
                </li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
