import Card from "@/components/Card";
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

    return fields?.map((ele) => (
        <Card
            key={ele._id}
            image={ele.img}
            price={ele.price}
            name={ele.name}
            workingHours={ele.hoursOpen}
            location={ele.location}
            details={ele.details}
        />
    ));
}
