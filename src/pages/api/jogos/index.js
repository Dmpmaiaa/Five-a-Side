import {
    getGames,
    getGamesByDate,
    getGamesByLocation,
    newGame,
} from "@/server/services/games";

export default async function handler(req, res) {
    try {
        const location = req.query.location;
        const date = req.query.date;

        if (req.method === "GET" && location) {
            const games = await getGamesByLocation(location);
            if (games) {
                return res.status(200).json(games);
            }
            return res.status(404).json(/* MENSAGEM DE ERRO */);
        }

        if (req.method === "GET" && date) {
            const games = await getGamesByDate(date);
            if (games) {
                return res.status(200).json({ games });
            }
            return res.status(404).json(/* MENSAGEM DE ERRO */);
        }

        if (req.method === "GET") {
            const games = await getGames();
            if (games) {
                return res.status(200).json(games);
            }
            return res.status(404).json(/* MENSAGEM DE ERRO */);
        }

        if (req.method === "POST") {
            const data = req.body;

            const dataForGame = await newGame(data);
            return res.status(201).json({ dataForGame });
        }
    } catch (err) {
        console.log(err);
    }
}
