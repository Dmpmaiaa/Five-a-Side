import { getMongoCollection } from "../db";
import { ObjectId } from "mongodb";


const COLLECTION_NAME = "campos";

export async function findFieldById(id) {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const result =  collection.findOne({ _id: new ObjectId(id) });
    return result
}


export async function findFields(id) {
    const collection = await getMongoCollection(COLLECTION_NAME)
    const result =  collection.find()
    return result
}