const { findUserAuthByEmail, createUserAuth, findUserAuth } = require("../database/dbLogic/auth")
const { createUserSession, findUserSessionByToken } = require("../database/dbLogic/sessions")



async function getUserByEmail(email) {
    const result = await findUserAuthByEmail(email)
    return result
}

async function addUserAuth(data) {
    const result = await createUserAuth(data)
    return result.insertedId
}

async function checkUserPassword(email, password) {
    const user = await findUserAuthByEmail(email)
    return (password === user.password) && !!user
}

async function addAuthSession(uid) {
    const result = await createUserSession({ uid, expiresAt: new Date(new Date().valueOf() + 3600 * 1000) })
    return result.insertedId
}

//Devolve todas as sessões ativas
async function validateSession(token) {
    const session = await findUserSessionByToken(token)
    return session && session.expiresAt > new Date()
}
async function getUser(id) {
    const result = await findUserAuth(id)
    console.log(result)
    return result
}

async function getSession(token) {
    const result = await findUserSessionByToken(token)
    return result
}

module.exports = {
    addUserAuth,
    addAuthSession,
    checkUserPassword,
    getUserByEmail,
    validateSession,
    getUser,
    getSession


}