import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Divider } from "@mui/material";

const BigFooter = () => {
    return (
        <div>
            <Divider sx={{ width: "100vw", marginLeft: "-10vw", marginTop: "40px" }} />
            <div className="home-footer flex">
                <div className="home-footer-item w-1/3">
                    <h2>About Us</h2>
                    <p>About Sweethome</p>
                    <p>Gift Cards</p>
                    <p>Locations</p>
                </div>

                <div className="home-footer-item w-1/3">
                    <h2>Customer Service</h2>
                    <p>My Orders</p>
                    <p>My Account</p>
                    <p>Return Policy</p>
                    <p>Help Center</p>
                    <p>Product Recalls</p>
                </div>

                <div className="home-footer-item w-1/3">
                    <h2>Contact Us</h2>
                    <div className="icon-desc" style={{ color: "white", backgroundColor: "#7f187f" }}>
                        <AccessTimeIcon />
                        <p>Quick Help</p>
                    </div>

                    <div className="icon-desc" style={{ color: "#7f187f", backgroundColor: "white", border: "1px solid #7f187f" }}>
                        <LocalPhoneOutlinedIcon />
                        <p>Call Us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigFooter;
