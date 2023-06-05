import { addUserAuth, getUserByEmail } from "@/server/services/auth";

export default async function handler(req, res) {
    try {
        if (req.method === "POST") {

            const { password, passwordConf, email } = req.body;
            if (password !== passwordConf) {
                return res
                    .status(400)
                    .json({ message: "passwords_dont_match" });
            }

            const user = await getUserByEmail(req.body.email ?? "");
            if (user) {
                return res
                    .status(400)
                    .json({ message: "email_already_in_use" });
            }

            const result = await addUserAuth({ password, email });

            return res.status(200).json({ _id: result });
        }
    } catch (error) {
        console.log(error);
    }
}
