import { getFields } from "@/server/services/campos";

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const fields = await getFields();
            return res.status(200).json(fields);
        }
    } catch (err) {
        console.log(err);
    }
}
