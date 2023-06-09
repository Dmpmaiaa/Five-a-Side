import Button from "@/components/Button";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "#/svg/logo.svg"
import Image from "next/image";
export default function Login(props) {
    const [loggedIn, setLoggedIn] = useState(true);





    
    return (
        <div className="bg-login-bg w-screen  bg-cover bg-no-repeat bg-bottom-left h-screen -z-20">
            <div className="h-screen w-full flex flex-col items-center bg-gradient-to-b from-[#211a1db7] to-[#00000014] -z-10">
                <div className="text-contrastOffWhite mt-10 p-10">
                <Image justify-center width={130} height={130} src={logo} />
                </div>
                <section className="text-center mt-6">
                    <div className="m-10">
                        <LoginForm />
                    </div>

                    <div className="flex flex-col items-center gap-14">
                        <Link href={`/profile`}>
                            <Button
                                text={"Log In"}
                                border={true}
                                
                            />

                        </Link>
                        <Link href={`/`}>
                            <Button
                                text={"Sign Up"}
                                color={"primaryBlue"}
                            />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
