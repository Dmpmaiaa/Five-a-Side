import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-screen relative overflow-x-hidden bg-primaryDarkerBlue flex flex-col items-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
