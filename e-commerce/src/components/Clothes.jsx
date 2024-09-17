import React, { useEffect, useState } from "react";
import "./Clothes.css"
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

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
    <div>
      <div>
        <ul className="flex flex-wrap content-center justify-center">
          {data.map((item) => (
              <div key={item.id}  className="border p-5 m-2 card">
                  <li className="relative"> <div className="flex justify-between"> <h1>{(item.name)}</h1> <h4>${(item.price)}</h4> </div><img className="h-full w-full object-contain" src={item.img} alt="" /></li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
