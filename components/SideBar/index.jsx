import "./Sidebar.css";
import React, { useState, useEffect } from "react";
import { styled, alpha } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InventoryIcon from '@mui/icons-material/Inventory';
import Modal from '@mui/material/Modal';
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from "../Logo";

const CustomLink = styled(RouterLink)(({link}) => ({
  color: "black",
  textDecoration: "none"
}));


const DisplayDepartments = ({departments, onClose}) => {
  return (
    <div className="sidebar-department-list">
      {departments.map((department, id) => (
        <CustomLink key={id} to={department.deptLink} onClick={onClose} >
          <div className="sidebar-department-item">
            <img src={department.deptImage} width={40} height={40} alt="depLogo"/>
            <p>{department.deptName}</p>
          </div>    
        </CustomLink>
        
      ))}
    </div>
  )
}

const Sidebar = ({onClose}) => {
  const departments = [
    {deptImage: "https://assets.wfcdn.com/im/99456963/resize-h80-w80%5Ecompr-r85/2664/266469146/default_name.jpg", deptName: "Sale", deptLink: "/Sale"},
    {deptImage: "https://assets.wfcdn.com/im/16127459/resize-h80-w80%5Ecompr-r85/1148/114856311/default_name.jpg", deptName: "Furniture", deptLink: "/Furniture"},
    {deptImage: "https://assets.wfcdn.com/im/88032533/resize-h80-w80%5Ecompr-r85/1148/114856319/default_name.jpg", deptName: "Outdoor", deptLink: "/Outdoor"},
    {deptImage: "https://assets.wfcdn.com/im/27346711/resize-h80-w80%5Ecompr-r85/5116/51166722/default_name.jpg", deptName: "Bed & Bath", deptLink: "/BeddingBath"},
  ]

    return (
      <div className='form_modal'>
        <Modal
        open={true}
        onClose={onClose}
      >
        <div className="sideBar-content">
        <div className="modal open">
            <div className="sideBar-name">
              <CloseIcon sx={{ color: "black", cursor: "pointer", mr: "10px"}} onClick={onClose} />
              <Logo/>
              
            </div>

            <div className="sideBar-listMyOrder">
              <CustomLink href="https://mui.com/material-ui/react-link/">
                <div className="sideBar-item">
                  <FavoriteBorderIcon sx={{color:"black", mr: "10px"}}/>
                  <p>Lists</p>
                </div>
              </CustomLink>

              <CustomLink href="https://mui.com/material-ui/react-link/">
                <div className="sideBar-item">
                  <InventoryIcon sx={{color:"black", mr: "10px"}}/>
                  <p>My Orders</p>
                </div>
              </CustomLink>
              
            </div>

            <div className="sideBar-department">
              <p style={{fontWeight:"bold", fontSize: "20px", paddingLeft: "5%", margin: "20px 0 20px 0"}}>Departments</p>
              <DisplayDepartments departments={departments} onClose={onClose}/>

            </div>

            
        </div>
        <RouterLink to="/Login">
          <div className="sideBar-signin">
            <p>Sign in</p>  
          </div>
        </RouterLink>
        
        </div>
        
      </Modal>
    </div>
    );

};

export default Sidebar;

