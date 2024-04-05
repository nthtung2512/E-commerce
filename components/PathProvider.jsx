'use client'
import { usePathname } from 'next/navigation';
import { createContext, useContext, useState, useEffect } from 'react';
import Navbar from "@components/Navbar";
import "@styles/globals.css";
import BackToTop from './BackToTop';
// const PathContext = createContext();

// export const usePathContext = () => useContext(PathContext);

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function PathProvider({children}) {
  const [showNavbar, setShowNavbar] = useState(false)
  const [smallContent, setSmallContent] = useState(false)
  const [haveAccount, setHaveAccount] = useState(false);
  const [salePickItems, setSalePickItems] = useState([
    {Sofa: [
      {photoURL: "https://images2.imgix.net/p4dbimg/401/360views/1435-401-360-01-06.jpg?fm=pjpg&auto=format", saleType: "Surplus Sale", saleItemName: "Sofa 1", salePrice: "1,099.99", prevSalePrice: "1,299.99", saleRating: 4.5, numberOfComment: 900},
      {photoURL: "https://images2.imgix.net/p4dbimg/401/360views/1435-401-360-01-06.jpg?fm=pjpg&auto=format", saleType: "Surplus Sale", saleItemName: "Sofa 1", salePrice: "1,099.99", prevSalePrice: "1,299.99", saleRating: 4.5, numberOfComment: 900},
      {photoURL: "https://images2.imgix.net/p4dbimg/401/360views/1435-401-360-01-06.jpg?fm=pjpg&auto=format", saleType: "Surplus Sale", saleItemName: "Sofa 1", salePrice: "1,099.99", prevSalePrice: "1,299.99", saleRating: 4.5, numberOfComment: 900},
      {photoURL: "https://images2.imgix.net/p4dbimg/401/360views/1435-401-360-01-06.jpg?fm=pjpg&auto=format", saleType: "Surplus Sale", saleItemName: "Sofa 1", salePrice: "1,099.99", prevSalePrice: "1,299.99", saleRating: 4.5, numberOfComment: 900},
      {photoURL: "https://images2.imgix.net/p4dbimg/401/360views/1435-401-360-01-06.jpg?fm=pjpg&auto=format", saleType: "Surplus Sale", saleItemName: "Sofa 1", salePrice: "1,099.99", prevSalePrice: "1,299.99", saleRating: 4.5, numberOfComment: 900},
      {photoURL: "https://images2.imgix.net/p4dbimg/401/360views/1435-401-360-01-06.jpg?fm=pjpg&auto=format", saleType: "Surplus Sale", saleItemName: "Sofa 1", salePrice: "1,099.99", prevSalePrice: "1,299.99", saleRating: 4.5, numberOfComment: 900},
      {photoURL: "https://images2.imgix.net/p4dbimg/401/360views/1435-401-360-01-06.jpg?fm=pjpg&auto=format", saleType: "Surplus Sale", saleItemName: "Sofa 1", salePrice: "1,099.99", prevSalePrice: "1,299.99", saleRating: 4.5, numberOfComment: 900},
      {photoURL: "https://images2.imgix.net/p4dbimg/401/360views/1435-401-360-01-06.jpg?fm=pjpg&auto=format", saleType: "Surplus Sale", saleItemName: "Sofa 1", salePrice: "1,099.99", prevSalePrice: "1,299.99", saleRating: 4.5, numberOfComment: 900},
      {photoURL: "https://images2.imgix.net/p4dbimg/401/360views/1435-401-360-01-06.jpg?fm=pjpg&auto=format", saleType: "Surplus Sale", saleItemName: "Sofa 1", salePrice: "1,099.99", prevSalePrice: "1,299.99", saleRating: 4.5, numberOfComment: 900},
      {photoURL: "https://images2.imgix.net/p4dbimg/401/360views/1435-401-360-01-06.jpg?fm=pjpg&auto=format", saleType: "Surplus Sale", saleItemName: "Sofa 1", salePrice: "1,099.99", prevSalePrice: "1,299.99", saleRating: 4.5, numberOfComment: 900},
      {photoURL: "https://images2.imgix.net/p4dbimg/401/360views/1435-401-360-01-06.jpg?fm=pjpg&auto=format", saleType: "Surplus Sale", saleItemName: "Sofa 1", salePrice: "1,099.99", prevSalePrice: "1,299.99", saleRating: 4.5, numberOfComment: 900},
    ]},
    {Desk: [
      {photoURL: "https://i5.walmartimages.com/seo/Ameriwood-Home-Wheaton-Lift-Top-L-Desk-White_cdbb75f7-43d1-493f-9565-9f6585096ac6_1.c7fedc78da451a59c7136f2bd3b00322.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", saleType: "Surplus Sale", saleItemName: "Desk 1", salePrice: "36.99", prevSalePrice: "46.00", saleRating: 4.5, numberOfComment: 2740},
      {photoURL: "https://i5.walmartimages.com/seo/Ameriwood-Home-Wheaton-Lift-Top-L-Desk-White_cdbb75f7-43d1-493f-9565-9f6585096ac6_1.c7fedc78da451a59c7136f2bd3b00322.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", saleType: "Surplus Sale", saleItemName: "Desk 1", salePrice: "36.99", prevSalePrice: "46.00", saleRating: 4.5, numberOfComment: 2740},
      {photoURL: "https://i5.walmartimages.com/seo/Ameriwood-Home-Wheaton-Lift-Top-L-Desk-White_cdbb75f7-43d1-493f-9565-9f6585096ac6_1.c7fedc78da451a59c7136f2bd3b00322.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", saleType: "Surplus Sale", saleItemName: "Desk 1", salePrice: "36.99", prevSalePrice: "46.00", saleRating: 4.5, numberOfComment: 2740},
      {photoURL: "https://i5.walmartimages.com/seo/Ameriwood-Home-Wheaton-Lift-Top-L-Desk-White_cdbb75f7-43d1-493f-9565-9f6585096ac6_1.c7fedc78da451a59c7136f2bd3b00322.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", saleType: "Surplus Sale", saleItemName: "Desk 1", salePrice: "36.99", prevSalePrice: "46.00", saleRating: 4.5, numberOfComment: 2740},
      {photoURL: "https://i5.walmartimages.com/seo/Ameriwood-Home-Wheaton-Lift-Top-L-Desk-White_cdbb75f7-43d1-493f-9565-9f6585096ac6_1.c7fedc78da451a59c7136f2bd3b00322.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", saleType: "Surplus Sale", saleItemName: "Desk 1", salePrice: "36.99", prevSalePrice: "46.00", saleRating: 4.5, numberOfComment: 2740},
      {photoURL: "https://i5.walmartimages.com/seo/Ameriwood-Home-Wheaton-Lift-Top-L-Desk-White_cdbb75f7-43d1-493f-9565-9f6585096ac6_1.c7fedc78da451a59c7136f2bd3b00322.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", saleType: "Surplus Sale", saleItemName: "Desk 1", salePrice: "36.99", prevSalePrice: "46.00", saleRating: 4.5, numberOfComment: 2740},
      {photoURL: "https://i5.walmartimages.com/seo/Ameriwood-Home-Wheaton-Lift-Top-L-Desk-White_cdbb75f7-43d1-493f-9565-9f6585096ac6_1.c7fedc78da451a59c7136f2bd3b00322.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", saleType: "Surplus Sale", saleItemName: "Desk 1", salePrice: "36.99", prevSalePrice: "46.00", saleRating: 4.5, numberOfComment: 2740},
      {photoURL: "https://i5.walmartimages.com/seo/Ameriwood-Home-Wheaton-Lift-Top-L-Desk-White_cdbb75f7-43d1-493f-9565-9f6585096ac6_1.c7fedc78da451a59c7136f2bd3b00322.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", saleType: "Surplus Sale", saleItemName: "Desk 1", salePrice: "36.99", prevSalePrice: "46.00", saleRating: 4.5, numberOfComment: 2740},
    ]
    }
  ])

  const allItems = [
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "Winter Clearance", saleItemName: "Sofa 1", salePrice: 1990, prevSalePrice: 2399, saleRating: 4.5, numberOfComment: 12, sponsor: false},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "", saleItemName: "Sofa 2", salePrice: 20, prevSalePrice: 24, saleRating: 4, numberOfComment: 2145, sponsor: false},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "Surplus Sale", saleItemName: "Sofa 3", salePrice: 200, prevSalePrice: 300, saleRating: 4.5, numberOfComment: 231, sponsor: true},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "Winter Clearance", saleItemName: "Sofa 4", salePrice: 459, prevSalePrice: 520, saleRating: 5, numberOfComment: 45, sponsor: false},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "Winter Clearance", saleItemName: "Sofa 5", salePrice: 542, prevSalePrice: 600, saleRating: 4.5, numberOfComment: 45, sponsor: true},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "", saleItemName: "Sofa 6", salePrice: 1021, prevSalePrice: 2399, saleRating: 4.5, numberOfComment: 12, sponsor: false},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "Winter Clearance", saleItemName: "Sofa 7", salePrice: 1000, prevSalePrice: 2399, saleRating: 4.5, numberOfComment: 12, sponsor: false},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "Surplus Sale", saleItemName: "Sofa 8", salePrice: 1999, prevSalePrice: 2399, saleRating: 4.5, numberOfComment: 12, sponsor: true},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "Winter Clearance", saleItemName: "Sofa 9", salePrice: 2015, prevSalePrice: 2399, saleRating: 4.5, numberOfComment: 12, sponsor: false},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "", saleItemName: "Sofa 10", salePrice: 80, prevSalePrice: 2399, saleRating: 4.5, numberOfComment: 12, sponsor: false},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "Winter Clearance", saleItemName: "Sofa 11", salePrice: 231, prevSalePrice: 2399, saleRating: 4.5, numberOfComment: 12, sponsor: true},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "Surplus Sale", saleItemName: "Sofa 12", salePrice: 99, prevSalePrice: 2399, saleRating: 4.5, numberOfComment: 12, sponsor: false},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "Winter Clearance", saleItemName: "Sofa 13", salePrice: 789, prevSalePrice: 2399, saleRating: 4.5, numberOfComment: 12, sponsor: false},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "Winter Clearance", saleItemName: "Sofa 14", salePrice: 12, prevSalePrice: 2399, saleRating: 4.5, numberOfComment: 12, sponsor: false},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "Surplus Sale", saleItemName: "Sofa 15", salePrice: 134, prevSalePrice: 2399, saleRating: 4.5, numberOfComment: 12, sponsor: true},
    {photoURL: "https://assets.wfcdn.com/im/24248046/resize-h500-w500%5Ecompr-r85/2641/264104619/Vroni+71.6%22+Square+Arm+Loveseat.jpg", saleType: "Winter Clearance", saleItemName: "Sofa 16", salePrice: 123, prevSalePrice: 2399, saleRating: 4.5, numberOfComment: 12, sponsor: false},
  ]

  const [favoriteItems, setFavoriteItem] = useState([])

  const [passedItems, setFilteredItem] = useState(allItems)
  const [account, setAccount] = useState([])
  const pathname = usePathname()
  
  useEffect(() => {
    if (pathname === '/login') {
      setShowNavbar(false);
    }
    else {
      setShowNavbar(true);
    }
    if (pathname === '/' || pathname === "/sale") {
      setSmallContent(true);
    }
    else {
      setSmallContent(false);
    }
  }, [pathname])


  return (
    <main className='app'>
      {showNavbar && 
        <AppContext.Provider value={{ haveAccount, setHaveAccount, account, setAccount }}>
          <Navbar />
        </AppContext.Provider>
      }

      <AppContext.Provider value={{ haveAccount, setHaveAccount, account, setAccount, salePickItems, setSalePickItems, allItems, favoriteItems, setFavoriteItem, passedItems, setFilteredItem }}>
        <div className={smallContent ? "content" : "normalFlow"}>
          <BackToTop>
            {children}
          </BackToTop>
        </div>
      </AppContext.Provider>  
      
      
      
    </main>
    
  );
};
