import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import { useEffect, useState } from "react";

export default function CardsPage(props) {
    const [fields, setFields] = useState([]);

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
        console.log(data.field);
    };

    return (
        <div className="flex flex-col items-center">
            
            <Topbar />

            <ul>
                {fields?.map((ele) => (
                    <li>
                        <Card
                            key={ele._id}
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
        </div>
    );
}
