import {connection} from "../../config/connection.js";

export async function prevGames() {
    const [prevGames, fields] = await connection.query(`SELECT * FROM game`)
    return prevGames
}

export async function searchTeamByName(teamName){
    try{
      const[results, fields] = await connection.query(`SELECT * FROM team WHERE teamName = '${teamName}'`)
      return results; 
    } catch (errors) {
      console.log(errors)
    }
}

export async function searchPlayerByName(playerName){
    try{
        const[results, fields] = await connection.query(`SELECT * FROM player WHERE playerName = '${playerName}'`)
        return results; 
    } catch (errors) {
        console.log(errors)
    }
}

export async function searchPlayerByTeam(teamName){
    try{
        const[results, fields] = await connection.query(`SELECT * FROM player B, team A WHERE A.teamName = '${teamName}' and B.idTeam = A.idTeam;`)
    } catch (errors) {
        console.log(errors)
    }
}

export async function searchPlayerByPosition(positionName){ //Select de strings fixas, stringify
    try{
        const[results, fields] = await connection.query(`SELECT * FROM player B, position A WHERE A.positionName = '${positionName}' and B.idPosition = A.idPosition;`)
    } catch (errors) {
        console.log(errors)
    }
}

export async function searchTeamByLeague(leagueName){ //Select de strings fixas, stringify
    try{
        const[results, fields] = await connection.query(`SELECT * FROM team B, league A WHERE A.leagueName = '${leagueName}' and B.idLeague = A.idLeague;`)
    } catch (errors) {
        console.log(errors)
    }
}