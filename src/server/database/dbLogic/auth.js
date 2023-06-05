const { ObjectId } = require("mongodb")
const { getMongoCollection } = require("./db")


const COLLECTION_NAME = "users"

async function findUserAuthByEmail(email) {
    const collection = await getMongoCollection(COLLECTION_NAME)
    return collection.findOne({ email: email })
}

async function createUserAuth(data) {
    const collection = await getMongoCollection(COLLECTION_NAME)
    return collection.insertOne(data)
}

async function findUserAuth(uid) {
    const collection = await getMongoCollection(COLLECTION_NAME)
    return collection.findOne({ _id: new ObjectId(uid) })
}

module.exports = {
    createUserAuth,
    findUserAuthByEmail,
    findUserAuth
}