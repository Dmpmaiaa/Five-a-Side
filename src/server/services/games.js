import {
  addNewPlayer,
  createNewGame,
  findGameById,
  findGameByMonth,
  findGameByWeek,
  findGames,
  findGamesByLocation,
} from "../database/dbLogic/games";

export async function getGames() {
  const games = await findGames();
  return games;
}

export async function getGameById(id) {
  const game = await findGameById(id);
  return game;
}

export async function getGamesByLocation(location) {
  const games = await findGamesByLocation(location);
  return games;
}

export async function getGamesByDate(date) {
  if (date === "week") {
    const games = await findGameByWeek();
    return games;
  } else if (date === "month") {
    const games = await findGameByMonth();
    return games;
  }
}

export async function newGame(data) {
  const gameCreation = await createNewGame(data);
  return gameCreation;
}

export async function newPlayer(uid, gameId) {
  const gameCreation = await addNewPlayer(uid, gameId);
  return gameCreation;
}
