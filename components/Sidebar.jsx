import "@styles/globals.css"
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InventoryIcon from '@mui/icons-material/Inventory';
import Modal from '@mui/material/Modal';
import Link from "next/link";
import Logo from "@components/Logo";


const DisplayDepartments = ({departments, onClose}) => {
  return (
    <div className="">
      {departments.map((department, id) => (
        <Link key={id} href={department.deptLink} onClick={onClose} >
          <div className="flex items-center mb-3 p-3 cursor-pointer">
            <img className="mr-4" src={department.deptImage} width={40} height={40} alt="depLogo"/>
            <p>{department.deptName}</p>
          </div>    
        </Link>
        
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
      <div className=''>
        <Modal
        open={true}
        onClose={onClose}
      >
        <div className="w-1/5">
        <div className="modal" style={{height: "calc(100vh - 80px)"}}>
            <div className="sidebar-item">
              <CloseIcon sx={{ color: "black", cursor: "pointer", mr: "10px"}} onClick={onClose} />
              <Logo/>
              
            </div>

            <div className="">
              <Link href="https://mui.com/material-ui/react-link/">
                <div className="sidebar-item">
                  <FavoriteBorderIcon sx={{color:"black", mr: "10px"}}/>
                  <p>Lists</p>
                </div>
              </Link>

              <Link href="https://mui.com/material-ui/react-link/">
                <div className="sidebar-item">
                  <InventoryIcon sx={{color:"black", mr: "10px"}}/>
                  <p>My Orders</p>
                </div>
              </Link>
              
            </div>

            <div className="pl-4">
              <p className="font-bold text-xl pl-4 mt-5 mb-5">Departments</p>
              <DisplayDepartments departments={departments} onClose={onClose}/>

            </div>

            
        </div>
        <Link href="/login">
          <div className="flex absolute left-0 bottom-0 h-20 justify-center w-1/4 bg-white shadow-signIn z-1000">
            <p className="rounded-xl text-center p-signIn bg-customPurple text-white text-xl flex self-center cursor-pointer hover:bg-hoverPurple" >Sign in</p>  
          </div>
        </Link>
        
        </div>
        
      </Modal>
    </div>
    );

};

export default Sidebar;

