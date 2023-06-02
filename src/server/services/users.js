import { findUser } from "../database/dbLogic/users"

export async function getUser(uid){
    const games = await findUser(uid)
    return games
}
