import {
    addNewPlayer,
    createNewGame,
    findGameById,
    findGameByMonth,
    findGameByWeek,
    findGames,
    findGamesByLocation,
    findGamesToday,
} from "../database/dbLogic/games";

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
    }
    if (date === "month") {
        const games = await findGameByMonth();
        return games;
    }
    if (date === "day") {
        const games = await findGamesToday();
        return games;
    }
}

export async function newGame(data) {
    const newData = {
        date: new Date(data.date),
        

    }
    const gameCreation = await createNewGame(data);
    console.log(data.date)

}

export async function newPlayer(uid, gameId) {
    const gameCreation = await addNewPlayer(uid, gameId);
    return gameCreation;
}
