import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useState } from "react";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  const [testingCard, setTestingCards] = useState([1, 2, 3, 4])

  return (
    <>
    {/* {testingCard.map(el => <Card />)} */}
    <LoginForm />

    </>
  );
}
