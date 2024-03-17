import "@styles/globals.css"
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import Link from "next/link";
import LoginIcon from '@mui/icons-material/Login';
import SellIcon from '@mui/icons-material/Sell';

const CartSideBar = ({ onClose }) => {
    return (
        <div className=''>
            <Modal
                open={true}
                onClose={onClose}
            >
                <div className="w-1/5">
                    <div className="cartModal block" style={{right: 0}}>
                        <div className="flex items-center">
                            <p className="cart-side-title text-center">In Your Cart</p>
                            <CloseIcon onClick={onClose} className="ml-auto cursor-pointer mr-2" />
                        </div>
                        <Divider />

                        <div className="pl-5">
                            <div>
                                <p className="cart-side-title">Oh-no! Looks like your cart is empty.</p>
                                <p className="text-xl">Here are some options to get you started:</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <LoginIcon className="mr-4 text-purple-700 text-2xl" />
                                <span className='text-xl'><Link href="/" className="text-purple-700 underline">Sign In</Link> to view your saved items</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <SellIcon className="mr-4 text-purple-700 text-2xl" />
                                <span className='text-xl'>Start saving with <Link href="/" className="text-purple-700 underline">Daily Sales</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CartSideBar;
