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
    return `Por favor preencha todos os campos.`;
  }

}



