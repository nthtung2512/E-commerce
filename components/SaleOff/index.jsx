import React from "react";
import Link from "next/link";

const SaleOff = ({ items }) => {
    return (
        <div className="flex flex-wrap mt-20 mb-20">
            {items.map((item, id) => (
                <div key={id} className="outerlayer p-4 rounded-md w-1/4 mr-4 mb-4 hover:border hover:border-black hover:shadow-md">
                    <div className="home-sale-item bg-yellow-200 p-4 text-center rounded-md">
                        {/* <Link href="/Login"> */}
                        <Link href="/">
                            <p className="text-purple-700 font-bold">{item.product}</p>
                            <p>up to</p>
                            <div className="saleoffTag">
                                <p className="text-5xl">{item.saleoff}%</p>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SaleOff;
