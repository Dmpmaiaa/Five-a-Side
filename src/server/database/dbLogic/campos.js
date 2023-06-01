const { ObjectId } = require("mongodb");

const COLLECTION_NAME = "campos";

export async function getFieldById(id) {
    const collection = await getMongoCollection(COLLECTION_NAME);
    return collection.findOne({ _id: new ObjectId(id) });
}
