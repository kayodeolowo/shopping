import Homepage from '../components/Homepage'
import Shop from './Shop'
import { ShopContextProvider } from '../context/shopcontext'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <ShopContextProvider> 
      <Homepage> 
          <Component {...pageProps} />
      </Homepage>
  </ShopContextProvider>
}

export default MyApp
