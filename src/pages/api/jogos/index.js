import { getGames, newGame } from "@/server/services/games";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const games = await getGames();
        if (games) {
            return res.status(200).json({ games });
        }
        return res.status(404).json(/* MENSAGEM DE ERRO */);
    }

    if (req.method === "POST"){
        const data = req.body
        
        const dataForGame = await newGame(data)
            return res.status(201).json({dataForGame})
    }


}
