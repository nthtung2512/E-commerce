import "@styles/globals.css";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
        <img src="./Images/armchair.png" width="30px" height="auto" alt="logo"/>
        <p className="text-customPurple cursor-pointer text-xl font-bold">SweetHome</p>
    </Link>
  );
};

export default Logo;

