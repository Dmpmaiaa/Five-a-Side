import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CardJogo from "@/components/CardJogo";
import CardGpt from "@/components/CardGpt";

export default function Home() {

  return (
    <>
      <Button variant="transparent" text="Sign Up" />
      <Button color="blue" text="Log In" />
      {/* <Card/> */}
      <CardJogo />
      <CardGpt name={"Parque Tenis"} location={"Vila do Conde"} time={"9:00-22:00"} type={"Sintetico"} price={"    25     €"} />

    </>
  );
}
