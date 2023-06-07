import Card from "@/components/FieldCard/Card";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Fields(props) {
    const [fields, setFields] = useState([]);
    const [dataToSend, setDataToSend] = useState({
        date: "",
        hours: "",
        locationId: "",
        participants: "",
        hostId: "",
        playersId: [],
    });


    const handleStateChange = (field, value) => {
        setDataToSend((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const fetchData = async () => {
        const res = await fetch("api/campos/");
        const data = await res.json();
        return await data;
    };

    /*     GETS DATA FROM FIELDS */

    useEffect(() => {
        (async () => {
            const fields = await fetchData();
            setFields(fields);
        })();
    }, []);

    const postGame = async () => {

        console.log(dataToSend);
        const res = await fetch("/api/jogos/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        });

        const data = await res.json();
        const status = res.status;
        if (status === 201) {
            toast.success("Jogo marcado!", {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    return (
        <div className="flex flex-col items-center">
            <>
                <Topbar />

                <ul className="mb-24 z-30">
                    {fields?.map((ele) => (
                        <li key={ele._id}>
                            <Card
                                cardId={ele._id}
                                image={ele.img}
                                price={ele.price}
                                name={ele.name}
                                workingHours={ele.hoursOpen}
                                location={ele.location}
                                details={ele.details}
                                description={ele.description}
                                handleInfo={(field, value) =>
                                    handleStateChange(field, value)
                                }
                                postGame={postGame}
                            />
                        </li>
                    ))}
                </ul>
                <ToastContainer
                    position="bottom-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />

                <Navbar page={"fields"} />
            </>
        </div>
    );
}
