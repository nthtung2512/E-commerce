import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import Link from "next/link";
import LoginIcon from '@mui/icons-material/Login';
import SellIcon from '@mui/icons-material/Sell';

const CartSideBar = ({ onClose }) => {
    return (
        <div className='form_modal'>
            <Modal
                open={true}
                onClose={onClose}
            >
                <div className="cartSideBar-content fixed top-0 right-0 h-full w-1/4 overflow-y-auto bg-white shadow-md z-50 overflow-x-hidden">
                    <div className="cartSideBar-modal open">
                        <div className="cartSideBar-name flex items-center">
                            <p className="text-black font-bold text-lg">In Your Cart</p>
                            <CloseIcon onClick={onClose} className="ml-auto cursor-pointer mr-2" />
                        </div>
                        <Divider />

                        <div className="cartSideBar-listMyOrder p-4">
                            <div>
                                <p className="text-black font-bold text-lg">Oh-no! Looks like your cart is empty.</p>
                                <p>Here are some options to get you started:</p>
                            </div>
                            <div className="cartSideBar-item flex items-center mt-4">
                                <LoginIcon className="mr-4 text-purple-700 text-2xl" />
                                <span><Link to="/" className="text-purple-700 underline">Sign In</Link> to view your saved items</span>
                            </div>
                            <div className="cartSideBar-item flex items-center mt-4">
                                <SellIcon className="mr-4 text-purple-700 text-2xl" />
                                <span>Start saving with <Link to="/" className="text-purple-700 underline">Daily Sales</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CartSideBar;
