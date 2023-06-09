import { getGameById, getGames, newPlayer } from "@/server/services/games";

export default async function handler(req, res) {
    try {
      
        if (req.method === "PATCH") {
            const data = req.body;

            const addPlayer = await newPlayer(data.uid, data.gid);
            if (addPlayer) {
                return res.status(201).json({ addPlayer });
            }
        }

        return res.status(401).json({ msg: "game:full" });
    } catch (err) {
        console.log(err);
    }
}

