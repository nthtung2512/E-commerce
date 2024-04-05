'use client'
import "@styles/globals.css"
import "@styles/sale.css";

import React, { useState } from "react";
import BigFooter from "@components/BigFooter"
import Carousel from "@components/Carousel";
import ItemList from "@components/ItemList";
import { useAppContext } from "@components/PathProvider";
const Sale = () => {
    const {salePickItems} = useAppContext()
    const [fullItems, setFullItems] = useState([
        {product: "Bedroom Furniture", saleoff: 40},
        {product: "Area Rugs", saleoff: 60},
        {product: "Living Room Seating", saleoff: 40},
        {product: "Bathroom Upgrades", saleoff: 40},
        {product: "Bathroom Upgrades", saleoff: 40},
        {product: "Bedroom Furniture", saleoff: 40},
        {product: "Area Rugs", saleoff: 60},
        {product: "Living Room Seating", saleoff: 40},
        {product: "Bathroom Upgrades", saleoff: 40},
        {product: "Bathroom Upgrades", saleoff: 40},
    ])

  const [currentPickFUIID, setCurrentPickFUID] = useState(0)

  const [currentCategory, setCurrentCategory] = useState(Object.keys(salePickItems[0])[0])

  const handleButtonClick = (index, category) => {
    setCurrentPickFUID(index)
    setCurrentCategory(category)
  }
  return (
    <div className="sale">
      <div className="w-full relative">
        <img src="./Images/sale-banner.webp" width="100%" alt="sale-banner"/>
      </div>

      <div className="sale-furniture-deal">
        <Carousel fullItems={fullItems}/>
      </div>

      <div className="sale-pick-for-you">
        <h2>Picks Just For You</h2>
        <div className="sale-category">
        {salePickItems.map((category, index) => (
          <button
            className={`sale-box ${currentPickFUIID === index ? 'currentID' : 'notCurrentID'}`}
            key={index}
            onClick={() => handleButtonClick(index, Object.keys(category)[0])}
          >
            {Object.keys(category)[0]}
            
          </button>
        ))}
        </div>

        <ItemList salePickItems={salePickItems[currentPickFUIID][currentCategory]}/>
      </div>
      <BigFooter/>
    </div>
  );
};

export default Sale;
