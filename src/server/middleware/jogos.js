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
        return res.status(400).json({ msg: "invalid_input" });
    }
}


export function checkAvailability(req, res){
    const {date, hours}}
}