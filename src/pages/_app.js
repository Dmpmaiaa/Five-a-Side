import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import "../styles/fontLabel.css";


export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState('oi')
  useEffect(() => {
   
  },[])
  return <Component {...pageProps} logged={isLoggedIn} />
}
