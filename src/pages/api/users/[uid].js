import { getUser } from "@/server/services/users";

export default async function handler(req, res) {
    const data = req.query
    const uid = data.uid

    if (req.method === "GET") {
        const user = await getUser(uid);
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).json({msg: "po crl"});
    }
}
