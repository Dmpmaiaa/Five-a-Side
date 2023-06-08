import { getMongoCollection } from "../db";
import { ObjectId } from "mongodb";
import moment from "moment/moment";

const COLLECTION_NAME = "games";

// ********* --- FIND ITEMS --- *********

//   ************ BY DATE ************
export async function findGamesToday() {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const currentDate = moment().startOf("day");
    console.log({
        $gte: currentDate.toDate(),
        $lt: moment(currentDate).endOf("day").toDate(),
    });
    const result = await collection
        .find({
            date: {
                $gte: currentDate.toDate(),
                $lt: moment(currentDate).endOf("day").toDate(),
            },
        })
        .toArray();

    /*  const orderedResult = await result.sort(
        (a, b) => Number(a.hours.slice(0, -3)) - Number(b.hours.slice(0, -3))
    ); */

    // console.log(await result);
    return result
}

export async function findGameByWeek() {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const currentDate = moment().startOf("week");
    const startDate = currentDate.toDate();
    const endDate = currentDate.add(6, "days").toDate();
    const weeklyDate = {
        date: {
            $gte: startDate,
            $lte: endDate,
        },
    };

    const result = await collection.find(weeklyDate).toArray();
    return result;
}

export async function findGameByMonth() {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const currentDate = moment().startOf("month");
    const startDate = currentDate.toDate();
    const endDate = currentDate.endOf("month").toDate();
    const monthlyDate = {
        date: {
            $gte: startDate,
            $lte: endDate,
        },
    };

    const result = await collection.find(monthlyDate).toArray();
    return result;
}

//  ************ FIND ITEMS BY ID ************
export async function findGameById(id) {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const result = await collection.findOne({ _id: new ObjectId(id) });
    return result;
}

// ************  FIND ITEMS BY LOCATION ************

export async function findGamesByLocation(location) {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const result = await collection
        .find({
            idLocation: new ObjectId("6479c2a71de2044d9892aa9f"),
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

    const collection = await getMongoCollection(COLLECTION_NAME);
    const game = await collection.findOne({ _id: new ObjectId(gameId) });
    const isAlreadyParticipating = game.idPlayers.some(
        (playerId) => playerId.toString() === uid
    );
    const isHost = game.idHost.toString() === uid;

    if (game.playersNumber < 10 && !isAlreadyParticipating && !isHost) {
        const result = await collection.updateOne(
            { _id: new ObjectId(gameId) },
            {
                $push: { playersId: new ObjectId(uid) },
                $inc: { participants: 1 },
            }
        );
        return result;
    } else if (game.playerNumbers > 9) {
        return "game_is_full";
    } else if (game.idPlayers.includes(uid)) {
        return "player_already_signed";
    }
}
