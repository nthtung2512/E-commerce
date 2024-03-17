'use client'
import { usePathname } from 'next/navigation';
import { createContext, useContext, useState, useEffect } from 'react';
import Navbar from "@components/Navbar";
import "@styles/globals.css";
// const PathContext = createContext();

// export const usePathContext = () => useContext(PathContext);

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function PathProvider({children}) {
  const [showNavbar, setShowNavbar] = useState(false)
  const [haveAccount, setHaveAccount] = useState(false);
  const [account, setAccount] = useState([])
  const pathname = usePathname()
  
  useEffect(() => {
    console.log(pathname)
    if (pathname === '/login') {
      setShowNavbar(false);
    }
    else {
      setShowNavbar(true);
    }
  }, [pathname])

  return (
    <main className='app'>
      {showNavbar && 
        <AppContext.Provider value={{ haveAccount, setHaveAccount, account, setAccount }}>
          <Navbar />
        </AppContext.Provider>
      }

      <AppContext.Provider value={{ haveAccount, setHaveAccount, account, setAccount }}>
        <div className={showNavbar ? "content" : "normalFlow"}>
          {children}
        </div>
      </AppContext.Provider>  
      
      
      
    </main>
    
  );
};
