import { getGameById, getGames, newPlayer } from "@/server/services/games";

export default async function handler(req, res) {
    try {
       /*  const { gameId } = req.query;
        if (req.method === "GET") {
            const games = await getGameById(gameId);
            return res.status(200).json(games);
        } */

        if (req.method === "PATCH") {
            const data = req.body;
       

            const addPlayer = await newPlayer(data.uid, data.gid);
            return res.status(201).json({ addPlayer });
        }

        return res.status(404).json({msg: "game:full"});
    } catch (err) {
        console.log(err);
    }
}

// *******  MIDDLEWARE ******

// function checkBody(data) {
//     if (data.length != 24 ) {
//         return res.status(404).json({ msg: "no_body" });
//     }
// }
