import { addAuthSession, checkUserPassword, getUserByEmail } from "@/server/services/auth";

export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            const user = await getUserByEmail(req.body.email ?? "");
            const isCorrect = await checkUserPassword(
                req.body.email ?? "",
                req.body.password ?? ""
            );
            if (isCorrect) {

                const token = await addAuthSession(user._id);
                return res.status(200).json({ token });
            }

            return res.status(403).end();
        }
    } catch (err) {
        console.log(err);
    }
}

