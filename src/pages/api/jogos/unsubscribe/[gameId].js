import { unsubscribePlayer } from "@/server/services/games";


export default async function handler(req, res) {
    try {
       

        if (req.method === "PATCH") {
            const data = req.body;

            const addPlayer = await unsubscribePlayer(data.uid, data.gid);
            return res.status(200).json({msg: "player_removed"})
        }

        return res.status(401).json({ msg: "game: not_subscribed" });
    } catch (err) {
        console.log(err);
    }
}