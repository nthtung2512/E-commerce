"use client"
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Link from "next/link";

const Carousel = ({ fullItems }) => {
    const itemRefs = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const maxItem = 5;

    const handleClickRight = () => {
        let nextIndex = Math.min(currentIndex + 1, fullItems.length - maxItem);
        const container = document.querySelector('.carousel-list');
        const viewportWidth = window.innerWidth;

        const itemWidthPixels = 0.16 * viewportWidth;  // Corrected
        const scrollToX = nextIndex * itemWidthPixels;

        container.scrollTo({
            top: 0,
            left: scrollToX,
            behavior: 'smooth',
        });

        setCurrentIndex(nextIndex);
    };

    const handleClickLeft = () => {
        let prevIndex = Math.max(currentIndex - 1, 0);
        const container = document.querySelector('.carousel-list');
        const viewportWidth = window.innerWidth;
        const itemWidthPixels = (0.16 * viewportWidth)
        const scrollToX = prevIndex * itemWidthPixels;

        container.scrollTo({
            top: 0,
            left: scrollToX,
            behavior: 'smooth',
        });

        setCurrentIndex(prevIndex);
    };

    return (
        <div className="carousel relative">

            <ArrowCircleLeftOutlinedIcon
                onClick={handleClickLeft}
                fontSize="large"
                color="disabled"
                className={`absolute top-1/2 left-0 transform -translate-y-1/2 cursor-${currentIndex === 0 ? "not-allowed" : "pointer"} ${currentIndex === 0 ? "text-gray-400" : "text-purple-700"}`}
            />

            <div className="carousel-list flex overflow-x-hidden">
                {fullItems.map((item, index) => {
                    return (
                        <div key={index} className="carousel-outerlayer p-4 rounded-md mr-4 mb-4 hover:border hover:border-black hover:shadow-md">
                            <div className="carousel-sale-item bg-yellow-200 p-4 text-center rounded-md">
                            {/* <Link to="/Login"> */}
                                <Link to="/">
                                    <p className="text-purple-700 font-bold">{item.product}</p>
                                    <p>up to</p>
                                    <div className="saleoffTag">
                                        <p className="text-5xl">{item.saleoff}%</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            <ArrowCircleRightOutlinedIcon
                onClick={handleClickRight}
                fontSize="large"
                color="disabled"
                className={`absolute top-1/2 right-0 transform -translate-y-1/2 cursor-${currentIndex === fullItems.length - maxItem ? "not-allowed" : "pointer"} ${currentIndex === fullItems.length - maxItem ? "text-gray-400" : "text-purple-700"}`}
            />

        </div>
    );

};

export default Carousel;
