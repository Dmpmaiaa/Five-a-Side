import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import TimeInput from "@/components/Date";

export default function Home() {


  return (
    <>
    <h1 className="text-contrastOffWhite">HOME</h1>
    <TimeInput/>


    </>
  );
}
