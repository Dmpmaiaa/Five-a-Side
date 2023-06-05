import { getMongoCollection } from "../db";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "games";

// ********* --- FIND ITEMS --- *********

export async function findGames() {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const day =
        new Date().getDate() < 10
            ? "0" + new Date().getDate()
            : new Date().getDate();
    const month =
        new Date().getMonth() + 1 < 10
            ? "0" + Number(new Date().getMonth() + 1)
            : Number(new Date().getMonth() + 1);

    const today = `${day}${month}${new Date().getFullYear()}`;

    const result = await collection.find({ date: today }).toArray();

    const orderedResult = await result.sort(
        (a, b) =>
            Number(a.schedule.slice(0, -3)) - Number(b.schedule.slice(0, -3))
    );

    return orderedResult;
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
    const game = collection.findOne({ id: new ObjectId(gameId) });
    if (game.playerNumbers < 10) {
        const result = collection.updateOne(
            { _id: new ObjectId(gameId) },
            {
                $push: { idPlayers: new ObjectId(uid) },
                $inc: { playerNumbers: 1 },
            }
        );
        return result
    } else{
        return "game_is_full"

    }

}
