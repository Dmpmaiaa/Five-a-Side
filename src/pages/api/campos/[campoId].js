import { getFieldById } from "@/server/services/campos";

export default async function handler(req, res) {
    const fieldId  = req.query;

    try {
        if (req.method === "GET") {
            const field = await getFieldById(fieldId.campoId);
            return res.status(200).json({ field });
        }

        return res.status(404).json({msg: "not_found"});
        
    } catch (err) {
        console.log(err);
    }
}
