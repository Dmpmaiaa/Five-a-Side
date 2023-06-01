export default async function handler(req, res) {
    const { id } = req.params;
    const field = await findFieldById(id)


    if (req.method === "GET") {
        return res.status(200).json(field);
    }

    return res.status(404).json(/* MENSAGEM DE ERRO */)


}
