import Card from "@/components/Card";
import DetailedCard from "@/components/DetailedCard";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import { useEffect, useState } from "react";


export default function Fields(props) {
   
      
    const [fields, setFields] = useState([]);
    const [moreInfo, setMoreInfo] = useState({ cardInfo: {}, show: false });


    const cleanState = (bool) => {
        bool && setMoreInfo({ moreInfo: {}, show: false });
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

    const getCard = async (id) => {
        const res = await fetch(`api/campos/${id}`);
        const data = await res.json();
        setMoreInfo({ cardInfo: data.field, show: true });
        console.log(data.field);
    };

    const postGame = async (gameData) => {
     
        const res = await fetch("/api/jogos/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(daodsDeUtikizador),
        })
        const data = await res.json();
        console.log(await data);
    };



    return (
        <div className="flex flex-col items-center">
            {moreInfo.show ? (
                <DetailedCard
                    fieldId={moreInfo.cardInfo._id}
                    moreOptions={() => cleanState(true)}
                    name={moreInfo.cardInfo.name}
                    image={moreInfo.cardInfo.img}
                    price={moreInfo.cardInfo.price}
                    workingHours={moreInfo.cardInfo.hoursOpen}
                    location={moreInfo.cardInfo.location}
                    description={moreInfo.cardInfo.description}
                    details={moreInfo.cardInfo.details}
                    postGame={(dataTosend) => postGame(dataTosend)}
                />
            ) : (
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
                                    moreOptions={() => getCard(ele._id)}
                                />
                            </li>
                        ))}
                    </ul>
                    <Navbar />
                </>
            )}
        </div>
    );
}
