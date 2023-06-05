import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Profile(props) {
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
        <div className="flex flex-col items-center">
            <h1 className="text-contrastOffWhite">Profile</h1>
            <Navbar />
        </div>
    );
}
