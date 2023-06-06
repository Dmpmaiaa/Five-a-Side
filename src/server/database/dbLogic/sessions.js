const { ObjectId } = require("mongodb")
const { getMongoCollection } = require("../db")

const COLLECTION_NAME = "sessions"

async function findUserSessionByToken(token) {
    const collection = await getMongoCollection(COLLECTION_NAME)
    return collection.findOne({ _id: new ObjectId(token) })
}
async function findUserSessionsByUserId(uid) {
    const collection = await getMongoCollection(COLLECTION_NAME)
    return collection.find({ _id: new ObjectId(token) }).toArray()
}
async function createUserSession(data) {
    const collection = await getMongoCollection(COLLECTION_NAME)
    return collection.insertOne(data)
}

module.exports = {
    createUserSession,
    findUserSessionByToken,
    findUserSessionsByUserId
}