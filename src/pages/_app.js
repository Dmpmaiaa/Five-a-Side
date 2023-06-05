import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState('oi')
  useEffect(() => {
    console.log(isLoggedIn)
  },[])
  return <Component {...pageProps} logged={isLoggedIn} />
}
