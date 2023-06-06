import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";


export default function Fields(props) {
    const [fields, setFields] = useState([]);
    const [dataToSend, setDataToSend] = useState({
        date: "",
        idCampo: "",
        participants: "",
        idHost: "",
        idPlayers: [],
        schedule: "",
    });

    const handleInfo = (e, cardId, participants, schedule, hostId) => {
        setDataToSend((prevState) => ({
            ...prevState,
            date: new Date(e.target.value),
            idCampo: cardId,
            participants,
            schedule,
            idHost: hostId,
        }));
    };

    const fetchData = async () => {
        const res = await fetch("api/campos/");
        const data = await res.json();
        return await data;
    };

    useEffect(() => {
        (async () => {
            const fields = await fetchData();
            setFields(fields);
        })();
    }, []);

    const postGame = async (idCampo, participants, schedule, host) => {
        setDataToSend((prevState) => ({
            ...prevState,
            idCampo,
            participants,
            host,
            schedule,
        }));

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


                <ul>
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
                                handleData={(e, id, part, sche, host) =>
                                    handleInfo(e, id, part, sche, host)
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

                <Navbar />
            </>
        </div>
    );
}
