import {connection} from "../../config/connection.js";

export async function prevGames() {
    const [prevGames, fields] = await connection.query(`SELECT * FROM game`)
    return prevGames
}