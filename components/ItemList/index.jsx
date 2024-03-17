import React, {useRef, useState} from "react";
import "./ItemList.css"
import "../Carousel/Carousel.css"
import {Link as RouterLink} from "react-router-dom"
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Rating } from "@mui/material";
const ItemList = ({salePickItems}) => {
    const itemRefs = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxItem = 5;

    const handleClickRight = () => {
        let nextIndex = Math.min(currentIndex + 1, salePickItems.length - maxItem);
        const container = document.querySelector('.itemList-list');
        const viewportWidth = window.innerWidth;
    
        const itemWidthPixels = 0.16 * viewportWidth + 1;  // Corrected
        const scrollToX = nextIndex * itemWidthPixels;
    
        container.scrollTo({
          top: 0,
          left: scrollToX,
          behavior: 'smooth',
        });
      
        setCurrentIndex(nextIndex);
      };
    
      const handleClickLeft = () => {
        let prevIndex = Math.max(currentIndex-1,0);
        const container = document.querySelector('.itemList-list');
        const viewportWidth = window.innerWidth;
        const itemWidthPixels = (0.16 * viewportWidth) + 1
        const scrollToX = prevIndex * itemWidthPixels;
    
        container.scrollTo({
          top: 0,
          left: scrollToX,
          behavior: 'smooth',
        });
    
        setCurrentIndex(prevIndex);
      };

    return (
        <div className="carousel">

        <ArrowCircleLeftOutlinedIcon
            onClick={handleClickLeft}
            fontSize="large"
            color="disabled"
            sx={{ position: "absolute", top: "50%", left: 0, cursor: currentIndex === 0 ? "not-allowed" : "pointer", color: currentIndex === 0 ? "disabled" : "purple", transform: "translateY(-50%)", zIndex: "100" }}
        />

        <div className="itemList-list">
            {salePickItems.map((item, index) => {
                return (        
                    <div key={index} className="itemList-outerlayer" ref={el => (itemRefs.current[index] = el)}>
                        <div className="itemList-sale-item">
                        <RouterLink to="/Login">
                            <img src={item.photoURL} width="100%"/>
                            <p>{item.saleType}</p>
                            <div>
                              <p>{item.saleItemName}</p>
                              <span style={{color: "black", fontSize: "1.5vw", fontWeight: "bold"}}>${item.salePrice}</span>
                              <span style={{color: "gray", textDecoration: "line-through", marginLeft: "10px"}}>{item.prevSalePrice}</span>
                              <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                                <Rating name="read-only" value={item.saleRating} precision={0.5} readOnly />
                                <p style={{marginLeft: '10px'}}>({item.numberOfComment})</p>
                              </div>
                              
                            </div>
                        </RouterLink>
                        </div>
                    </div>
                );
            })}
        </div>

      <ArrowCircleRightOutlinedIcon
        onClick={handleClickRight}
        fontSize="large"
        color="disabled"
        sx={{ position: "absolute", top: "50%", right: 0, cursor: currentIndex === salePickItems.length - maxItem ? "not-allowed" : "pointer", color: currentIndex === salePickItems.length - maxItem ? "disabled" : "purple", transform: "translateY(-50%)" }}
      />

    </div>
    )
}

export default ItemList