import { checkDataFromNewGame } from "@/server/middleware/jogos";

import {
    getGames,
    getGamesByDate,
    getGamesByLocation,
    newGame,
} from "@/server/services/games";

export default async function handler(req, res) {
    console.log("OLA");
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

                console.log(games);
                if (games) {
                    return res.status(200).json(games);
                }
                return res.status(404).json({ message: "no_games_found" });
            }
        }

        if (req.method === "POST") {
            const data = req.body;
            checkDataFromNewGame(req, res)
         

            const dataForGame = await newGame(data);
            return res.status(201).json({ dataForGame });
        }
    } catch (err) {
        console.log(err);
    }
}
