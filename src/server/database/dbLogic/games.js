import { getMongoCollection } from "../db";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "games";

export async function findGames() {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const today = `${new Date().getDate()}/${
        new Date().getMonth() + 1
    }/${new Date().getFullYear()}`;
    const result = await collection.find({ date: today }).toArray();

    return result;
}

export async function findGameById(id) {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const result = collection.findOne({ _id: new ObjectId(id) });
    return result;
}

export async function createNewGame(data) {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const result = collection.insertOne(data);
    return result;
}

export async function addNewPlayer(uid, gameId) {
    // CHECK IF USER IS ALREADY SIGNED IN GAME
    // CHECK IF GAME IS NOT FULL
    const collection = await getMongoCollection(COLLECTION_NAME);
    const result = collection.updateOne(
        { _id: new ObjectId(gameId) },
        {
            $push: { idPlayers: new ObjectId(uid) },
            $inc: { playersNumber: 1 },
        }
    );
    return result;
}
