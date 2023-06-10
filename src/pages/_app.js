import "@/styles/globals.css";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "../styles/fontLabel.css";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState("oi");
  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <title>Five a Side</title>
       
      </Head>
      <Component {...pageProps} logged={isLoggedIn} />
    </>
  );
}
