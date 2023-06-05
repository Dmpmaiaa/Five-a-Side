import { getMongoCollection } from "../db";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "games";

// ********* --- FIND ITEMS --- *********

export async function findGames() {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const today = formataData(new Date());
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
            idLocation: new ObjectId(location),
        })
        .toArray();
    return result;
}

export async function findGamesByDate(date) {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const currentDate = new Date();
    const startOfWeek = getStartDate(currentDate);
    const endOfWeek = getEndOfWeek(currentDate);

    if (date === "week") {
        const result = await collection
            .find({
                date: {
                    $gte: parseDate(startOfWeek),
                    $lte: parseDate(endOfWeek),
                },
            })
            .toArray();

        return result;
    } else if (date === "month") {
        const result = await collection
            .find({
                $expr: {
                    $eq: [
                        {
                            $month: {
                                $dateFromString: { dateString: "$date" },
                            },
                        },
                        currentDate.getMonth() + 1,
                    ],
                },
            })
            .toArray();

        return result;
    }
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
    const game = collection.findOne({ id: new ObjectId(gameId) });
    if (game.playerNumbers < 10) {
        const result = collection.updateOne(
            { _id: new ObjectId(gameId) },
            {
                $push: { idPlayers: new ObjectId(uid) },
                $inc: { playerNumbers: 1 },
            }
        );
        return result;
    } else {
        return "game_is_full";
    }
}

