import Image from "next/image";

import Button from "@/components/Button";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import LoginForm from "@/components/LoginForm";
import TimeInput from "@/components/Date";

export default function Home() {
    useEffect(() => {
        async function authorize() {
            if (localStorage.getItem("token")) {
                const res = await fetch("/api/posts", {
                    method: "GET",
                    headers: {
                        authorization: localStorage.getItem("token"),
                    },
                });

                if (res.status === 200) {
                    console.log("NICE");
                } else {
                    console.log("NOT NICE");
                }
            }
        }
        authorize();
    }, []);

    return (
        <>
            <h1 className="text-contrastOffWhite">HOME</h1>
            {/* const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("token"))) */}
        </>
    );
}
