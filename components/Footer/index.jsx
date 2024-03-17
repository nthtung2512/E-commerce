import React, { useState, useEffect } from "react";
import "./Footer.css" 
const Footer = () => {
  return (
    <div className="footer">
        <div>
            <p>@ 2024, Sweethome</p>
        </div>
        <div className="term">
            <p>Privacy & Terms</p>
            <p>|</p>
            <p>Your Privacy Rights and Choices</p>
        </div>
    </div>
  );
};

export default Footer;

