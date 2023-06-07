import {checkDataFromNewGame} from "@/server/middleware/jogos";

import {
  getGames,
  getGamesByDate,
  getGamesByLocation,
  newGame,
} from "@/server/services/games";

export default async function handler(req, res) {
  try {
    const location = req.query.location;
    const date = req.query.date;

    if (req.method === "GET") {

      if (location) {
        const games = await getGamesByLocation(location);
        if (games) {
          return res.status(200).json(games);
        }                                                                                                                                    
        return res.status(404).json(/* MENSAGEM DE ERRO */);
      }

      if (date) {
        const games = await getGamesByDate(date);
        if (games) {
          return res.status(200).json({ games });
        }
        return res.status(404).json(/* MENSAGEM DE ERRO */);
      }

      const games = await getGames();
      if (games) {
        return res.status(200).json(games);
      }
      return res.status(404).json(/* MENSAGEM DE ERRO */);
    }

    if (req.method === "POST") {
      checkDataFromNewGame(req, res)
      // verificaCoisas(req,res)
      // verificaData (req,res)
      const data = req.body;
      console.log(data);
      const dataForGame = await newGame(data);
      return res.status(201).json({ dataForGame });
    }
  } catch (err) {
    console.log(err);
  }
}
