import "@styles/globals.css"; 
const Footer = () => {
  return (
    <div className="flex mt-auto bg-lightPink" style={{padding: "20px 15vw"}}>
        <div>
            <p>@ 2024, Sweethome</p>
        </div>
        <div className="flex flex-1 justify-end">
            <p>Privacy & Terms</p>
            <p>|</p>
            <p>Your Privacy Rights and Choices</p>
        </div>
    </div>
  );
};

export default Footer;

