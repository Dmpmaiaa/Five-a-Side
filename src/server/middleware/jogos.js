import { NextResponse } from "next/server";

export function checkDataFromNewGame(req, res) {
  const { date, hours, locationId, participants, hostId } = req.body;
  if (
    date === "" ||
    hours === "" ||
    locationId === "" ||
    participants === "" ||
    hostId === ""
  ) {
    return "Por favor preencha todos os campos.";
  }
  console.log(new Date(date).valueOf());
  if ((new Date(date).valueOf() < new Date().valueOf())) {
    return "Por favor escolha uma data futura.";
  }
}



