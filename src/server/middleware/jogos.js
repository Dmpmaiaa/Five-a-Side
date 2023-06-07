import { NextResponse } from "next/server";

export function checkDataFromNewGame(req, res) {
    const { idCampo, idHost, idPlayers, playerNumbers, date, schedule } = req.body;
    console.log("olaaaa")
    if (!idCampo || !idHost  || !playerNumbers || !date || !schedule) {
        return res.status(403).end()//.json({ error: "Missing required endpoints" });
    } if ((idPlayers.length + playerNumbers) > 10) {
        return res.status(400).json({ error: "Number of idPlayers does not match playerNumbers" });
        
    } else {
        
        return res.status(200).end()
    }
}


// export function verificaData(req, res) {
//     const {date} = req.body;

//     if (!date) {
//       res.status(400).json({ error: "Missing date" });
//     } else {
//       return
//     }
//   }


// export function verificaCoisas(req, res) {
//     const { idCampo, idHost, idPlayers, playerNumbers, date, schedule } = req.body;
//     console.log("olaaaa do verificaCoisas")
//     if (!idCampo || !idHost || !idPlayers || !playerNumbers || !date || !schedule) {
//         if (idPlayers.length > 10) {
//             res.status(400).json({ error: "Too many players. Maximum allowed is 10." });
//         } else {

//             return
//         }

//     }
// }