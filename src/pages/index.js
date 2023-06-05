import { Inter } from 'next/font/google'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })



/*export default function Home() {
  return (
    <div>
      <Image src="/images/minha-imagem.jpg" alt="Minha Imagem" width={500} height={300} />
    </div>
  );
} */

import React from 'react';

 const LoginForm = () => {
  
 
return (   
 
  <form className="w-full max-w-sm">
  <div className="flex items-center w-80 border-b border-[offWhite] py-3">
    <input
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-1 py-1 px-6 leading-tight focus:outline-none"
      type="text"
      placeholder="Name"
      aria-label="Full name"
    />
   
  </div>

  <div className="flex items-center w-80 border-b border-[offWhite] py-3">
    <input
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-6 leading-tight focus:outline-none"
      type="text"
      placeholder="Password"
      aria-label="Full name"
    />
   
  </div>


  <div>
      <Image src="/images/minha-imagem.jpg" alt="Minha Imagem" width={1000} height={200} />
    </div>
</form>







);
};






export default LoginForm;


