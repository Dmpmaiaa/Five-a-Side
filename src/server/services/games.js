import { addNewPlayer, createNewGame, findGameById, findGames } from "../database/dbLogic/games";

export async function getGames(){
    const games = await findGames()
    return games
}


export async function getGameById(id) {
    const field = await findGameById(id);
    return field;
}


export async function newGame(data){
    const gameCreation = await createNewGame(data)
    return gameCreation
}


export async function newPlayer(uid, gameId){
    const gameCreation = await addNewPlayer(uid, gameId)
    return gameCreation
}
