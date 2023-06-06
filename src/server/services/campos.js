import { findFieldById, findFields } from "../database/dbLogic/campos";

export async function getFields(){
    const fields = await findFields()
    return fields
}


export async function getFieldById(id) {
    const field = await findFieldById(id);
    return field;
}
