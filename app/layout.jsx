import "@styles/globals.css";

// import Provider from "@components/Provider";
import DataProvider from "@components/DataProvider"; 
import PathProvider from "@components/PathProvider";
import { usePathContext } from "@components/PathProvider";
export const metadata = {
  title: "Sweethome",
  description: "Decor your home now",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;600;700&family=Inter:wght@600;700;900&display=swap"
          rel="stylesheet"
        />
        <title>SweetHome</title>
        <link rel="icon" type="image/x-icon" href="/Images/armchair.png" />
      </head>
      <body>
        {/* <Provider>
            
          </Provider> */}
          <PathProvider>
            {/* <main className='app'>
              <PathProvider>
                {showNavbar && <Navbar />}
              </PathProvider>
              
              <div className="content">
                {children}
              </div>
              
            </main> */}
            {children}
          </PathProvider>
          
      </body>
    </html>
)};

export default RootLayout;
