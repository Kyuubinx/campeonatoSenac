// import { connection } from "../../config/connection.js";

// export async function listGamesModel() {
//     try {
//         const [results, fields] = await connection.query(`SELECT * FROM game`)
//         return results
//     } catch (errors) {
//         console.log(errors)
//     }
// }
// export async function listTeamsModel() {
//     try {
//         const [results, fields] = await connection.query(`SELECT * FROM team`)
//         return results;
//     } catch (errors) {
//         console.log(errors)
//     }
// }

// export async function listPlayersModel() {
//     try {
//         const [results, fields] = await connection.query(`SELECT * FROM player`)
//         return results;
//     } catch (errors) {
//         console.log(errors)
//     }
// }

// export async function listPlayersInTeamModel(idTeam) {
//     try {
//         const [results, fields] = await connection.query(`SELECT * FROM player WHERE idTeam = ${idTeam}`)
//         return results
//     } catch (errors) {
//         console.log(errors)
//     }
// }
// export async function listPositionModel() {
//     try {
//         const [results, fields] = await connection.query(`SELECT * FROM position`)
//         return results;
//     } catch (errors) {
//         console.log(errors)
//     }
// }

// export async function searchTeamByNameModel(teamName) {
//     try {
//         const [results, fields] = await connection.query(`SELECT * FROM team WHERE teamName = '${teamName}'`)
//         return results;
//     } catch (errors) {
//         console.log(errors)
//     }
// }

// export async function searchPlayerByNameModel(playerName) {
//     try {
//         const [results, fields] = await connection.query(`SELECT * FROM player WHERE playerName = '${playerName}'`)
//         return results;
//     } catch (errors) {
//         console.log(errors)
//     }
// }

// export async function searchPlayerByTeamModel(teamName) {
//     try {
//         const [results, fields] = await connection.query(`SELECT * FROM player B, team A WHERE A.teamName = '${teamName}' and B.idTeam = A.idTeam;`)
//         return results
//     } catch (errors) {
//         console.log(errors)
//     }
// }
// export async function listGamesInTeamModel(idTeam) {
//     try {
//         const [results, fields] = await connection.query(`SELECT * FROM game WHERE teamHome = '${idTeam}' OR teamAway = '${idTeam}'`)
//         return results
//     } catch (errors) {
//         console.log(errors)
//     }
// }
// export async function listFutureGamesModel(actualDate) {
//     try {
//         const [results, fields] = await connection.query(`SELECT * from game WHERE dateGame > '${actualDate}'`)
//         return results
//     } catch (errors) {
//         console.log(errors)
//     }
// }
