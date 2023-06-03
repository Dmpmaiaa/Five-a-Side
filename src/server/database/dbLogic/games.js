import { getMongoCollection } from "../db";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "games";

// ********* --- FIND ITEMS --- *********

export async function findGames() {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const today = `${new Date().getDate()}${
        new Date().getMonth() + 1
    }${new Date().getFullYear()}`;
    const result = await collection.find({ date: today }).toArray();

    return result;
}

export async function findGameById(id) {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const result = await collection.findOne({ _id: new ObjectId(id) });
    return result;
}

export async function findGamesByLocation(location) {
    const collection = await getMongoCollection(COLLECTION_NAME);
    console.log(location);
    const result = await collection
        .find({
            idLocation: new ObjectId("6479c2a71de2044d9892aa9f"),
        })
        .toArray();
    return result;
}

export async function findGamesByDate(date) {
    const collection = await getMongoCollection(COLLECTION_NAME);

    const result = await collection
        .find({
            date: date,
        })
        .toArray();
    return result;
}

// ********* --- INSERT ITEMS --- *********

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