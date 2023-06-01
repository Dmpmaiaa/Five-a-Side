export async function findFieldById(id) {
    const field = await getFieldById(id);
    return field;
}
