import Button from "@/components/Button";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Login(props) {
    const [loggedIn, setLoggedIn] = useState(true);
    const [state, setState] = useState({ password: "", email: "" });

    useEffect(() => {
        setInterval(() => {
            setLoggedIn(Boolean(localStorage.getItem("token")));
        }, 1000);
    }, []);


    async function login() {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(state),
        });

        if (res.status === 200) {
            const corpo = await res.json();
            localStorage.setItem("token", corpo.token);
        } else {
            console.log('wrong')
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            login()
          }
          const handleChange = (value, field) => {
            setState(s => ({ ...s, [field]: value }))
          }

    }
    return (
        <div className="bg-login-bg bg-auto bg-no-repeat bg-left h-screen grayscale-75 -z-20">
            <div className="h-screen w-full bg-gradient-to-b from-[#211a1db7] to-[#00000014] -z-10">
                <div className="text-contrastOffWhite text-center p-16">
                    <h1 className="text-9xl font-bold italic">5</h1>
                    <h2 className="text-4xl italic font-light">FIVE A SIDE</h2>
                </div>
                <section className="text-center mt-6">
                    <div className="m-10">
                        <LoginForm />
                    </div>

                    <div className="flex flex-col items-center gap-14">
                        <Link href={`${loggedIn ? "/fields" : "/login"}`}>
                            <Button
                                text={"Log In"}
                                border={true}
                                
                            />

                        </Link>
                        <Link href={`${loggedIn ? "/" : "/login"}`}>
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
