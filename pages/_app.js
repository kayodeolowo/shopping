import Homepage from '../components/Homepage'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <Homepage> 
       <Component {...pageProps} />
       
  </Homepage>
}

export default MyApp
