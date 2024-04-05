import "@styles/globals.css"
import "@styles/saleOff.css"
import React from "react";
import Link from "next/link";

const SaleOff = ({items}) => {
    return (
        <div className="home-surplus-sale-container">
            {items.map((item, id) => (
                <div key={id} className="outerlayer">
                    <div className="home-sale-item">
                        <Link href="/">
                            <p>{item.product}</p>
                            <p>up to</p>
                            <div className="saleoffTag">
                                <p style={{fontSize:"5em"}}>{item.saleoff}%</p>
                            </div>
                        </Link>
                    </div>
                </div>
               
            ))}
        </div>
    )
}

export default SaleOff;
