import { checkDataFromNewGame } from "@/server/middleware/jogos";

import {
    getGames,
    getGamesByDate,
    getGamesByLocation,
    newGame,
} from "@/server/services/games";

export default async function handler(req, res) {
    console.log("OLA")
    try {
        const location = req.query.location;
        const date = req.query.date;

        if (req.method === "GET") {
            if (location) {
                const games = await getGamesByLocation(location);
                if (games) {
                    return res.status(200).json(games);
                }
                return res.status(404).json(/* MENSAGEM DE ERRO */);
            }

            if (date) {
                const games = await getGamesByDate(date);
                console.log("HA JOGOS?")
                console.log(games)
                if (games) {
                    console.log("HA")
                    console.log("HA")
                    return res.status(200).json(games);
                }
                return res.status(404).json({message: "no_games_found"});
            }
        }

        if (req.method === "POST") {
            //checkDataFromNewGame(req, res);
            const data = req.body;
            console.log(data);
            const dataForGame = await newGame(data);
            return res.status(201).json({ dataForGame });
        }
    } catch (err) {
        console.log(err);
    }
}
