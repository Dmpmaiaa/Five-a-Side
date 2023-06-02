import { getGameById, getGames, newPlayer } from "@/server/services/games";

export default async function handler(req, res) {
    const {gameId} = req.query;


    if (req.method === "GET") {
        const games = await getGameById(gameId);
        return res.status(200).json(games);
    }

    
    if (req.method === "PATCH"){
        const data = req.body
        console.log(data);
        const addPlayer = await newPlayer(data.uid, gameId)
        return res.status(201).json({addPlayer})
    }

    return res.status(404).json(/* MENSAGEM DE ERRO */);
}
