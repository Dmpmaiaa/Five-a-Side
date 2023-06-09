import { ObjectId } from "mongodb";
import {
    addNewPlayer,
    createNewGame,
    findGameById,
    findGameByMonth,
    findGameByWeek,
    findGames,
    findGamesByLocation,
    findGamesToday,
    removePlayerFromGame,
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
        hours: data.hours,
        locationId: new ObjectId(data.locationId),
        participants: data.participants,
        hostId: new ObjectId(data.hostId),
        playersId: [],
    };

    
    const gameCreation = await createNewGame(newData);
    return gameCreation;
}

export async function newPlayer(uid, gameId) {
    const gameCreation = await addNewPlayer(uid, gameId);
    return gameCreation;
}


export async function unsubscribePlayer(uid, gameId){
    const playerRemoval = await removePlayerFromGame(uid, gameId)
    return playerRemoval
}
