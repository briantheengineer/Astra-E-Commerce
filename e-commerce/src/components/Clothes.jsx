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
    <div className="text-center mt-5">
      <h1 className="integralBold text-2xl ">New Arrivals</h1>
      <div>
        <ul className="flex flex-wrap content-center justify-center">
          {data.map((item) => (
              <div key={item.id}  className="border p-5 m-2 card">
                  <li className="relative"><img className="h-full w-full object-contain rounded-lg" src={item.img} alt="" /> <div className="flex justify-between integralNormal"> <h1>{(item.name)}</h1> <h4>${(item.price)}</h4> </div></li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
