import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
<<<<<<< HEAD
import CardJogo from "@/components/CardJogo";
import CardGpt from "@/components/CardGpt";
=======
import { useState } from "react";
import LoginForm from "@/components/LoginForm";
>>>>>>> 03c095812353b1a6eb5780dc9d1edbb9b86a65f1

export default function Home() {


  return (
    <>
<<<<<<< HEAD
      <Button variant="transparent" text="Sign Up" />
      <Button color="blue" text="Log In" />
      {/* <Card/> */}
      <CardJogo />
      <CardGpt name={"Parque Tenis"} location={"Vila do Conde"} time={"9:00-22:00"} type={"Sintetico"} price={"    25     €"} />
=======
    <h1 className="text-contrastOffWhite">HOME</h1>
    

>>>>>>> 03c095812353b1a6eb5780dc9d1edbb9b86a65f1

    </>
  );
}
