import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";
import { ToastContainer } from "react-toastify";


export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="relative h-fit bg-primaryDarkestBlue flex flex-col items-center">
                <Main />
                <NextScript />
               
            </body>
        </Html>
    );
}
