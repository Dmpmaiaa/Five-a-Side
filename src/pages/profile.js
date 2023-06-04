import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Profile(props) {

    // useEffect(() => {
    //     const fetchData = async (uid) => {
    //         const res = fetch(`/api/users/${uid}`);
    //         const data = (await res).json();
    //         return data;
    //     };

    //     (async = () => {
    //         fetchData(uid);
    //     })();
    // }, []);

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-contrastOffWhite">Profile</h1>
            <Navbar/>
        </div>
    );
}
