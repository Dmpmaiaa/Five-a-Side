
export default async function handler(req, res) {
    try {
        const user = await getUserByEmail(req.body.email ?? "");
        const isCorrect = await checkUserPassword(req.body.email ?? "", req.body.password ?? "")
        if (isCorrect) {
            //create session
            const token = await addAuthSesion(user._id)
            return res.status(200).json({ token })
        }

        return res.sendStatus(403)

    }catch (err) {
            console.log(err);
        }
    }
  


app.post("/api/auth/login", async (req, res) => {
    try {
        const user = await getUserByEmail(req.body.email ?? "");
        const isCorrect = await checkUserPassword(req.body.email ?? "", req.body.password ?? "")
        if (isCorrect) {s
            //create session
            const token = await addAuthSesion(user._id)
            return res.status(200).json({ token })
        }

        return res.sendStatus(403)
    } catch (err) {
        console.log(err)
    }
})