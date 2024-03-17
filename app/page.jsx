'use client'
import React, { useState } from "react";
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from "@mui/material";
import "@styles/globals.css"
// import { SaleOff, BigFooter } from "@components";

const Home = () => {
    const [items, setItems] = useState([
        {product: "Bedroom Furniture", saleoff: 40},
        {product: "Area Rugs", saleoff: 60},
        {product: "Living Room Seating", saleoff: 40},
        {product: "Bathroom Upgrades", saleoff: 40},
    ]);

    const [displaySaleState, setDisplaySaleState] = useState(true);

    return (
        <div className="w-full mt-5 box-border relative">
            <div className="flex flex-col justify-center mb-8">
                <div className="flex">
                    <div className="w-3/5 mr-5">
                        <div className="cursor-pointer h-full img_border">
                            <img src="./Images/saleoff.png" alt="saleoff" className="rounded-xl h-full w-full"/>
                        </div>
                    </div>

                    <div className="flex flex-col w-2/5 mr-5">
                        <div className="cursor-pointer h-1/2 img_border">
                            <img src="./Images/door.webp" alt="Door" className="rounded-xl h-full"/> 
                        </div>
                        <div className="cursor-pointer h-1/2 img_border">
                            <img src="./Images/washer.webp" alt="Washer" className="rounded-xl h-full"/>             
                        </div>              
                    </div>
                </div>

                <div className="flex mt-4">
                    <div className="cursor-pointer w-full mr-4 img_border">
                        <img src="./Images/faux-plane.webp" alt="FauxPlant" className="rounded-xl"/>    
                    </div>

                    <div className="cursor-pointer w-full mr-4 img_border">
                        <img src="./Images/bar-stool.webp" alt="BarStool" className="rounded-xl"/>    
                    </div>

                    <div className="cursor-pointer w-full mr-0 img_border">
                        <img src="./Images/grill.webp" alt="Grill" className="rounded-xl"/>    
                    </div>
                </div>
            </div>

            <div className="w-full img_border">
                <Link href="/">
                    <img className="rounded-xl" src="./Images/deals_of_the_day.webp" alt="DOTD"/>
                </Link>
            </div>

            <div className=" mt-8 mb-8">
                <p className="text-center font-bold text-3xl">The Surplus Sale. We overstocked - you save big.</p>
                {/* <SaleOff items={items}/> */}
            </div>

            <div className="flex p-4 rounded-lg items-center fixed bottom-1/4" style={{display: displaySaleState ? 'flex' : 'none', backgroundColor: '#7f187f'}}>
                <p className="mr-5 text-white text-xl font-bold">Want 10% Off?</p>
                <CloseIcon onClick={() => (setDisplaySaleState(false))} sx={{color: "white", cursor:"pointer"}}/>
            </div>
            <Divider sx={{ width: "100vw", marginLeft: "-10vw" }}/>
            {/* <BigFooter/> */}
        </div>
    );
};

export default Home;
