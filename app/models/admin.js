import {connection} from "../../config/connection.js";

export async function listUsers() {
  try {
    const [results, fields] = await connection.query("SELECT * FROM user");
    return results;
  } catch (errors) {
    console.log(errors);
  }
}

export async function listTeams() {
  try{
    const [results, fields] = await connection.query(`SELECT * FROM team`)
    return results;
  } catch (errors){
    console.log(errors)
  }

}

export async function searchTeamByName(teamName){
  try{
    const[results, fields] = await connection.query(`SELECT * FROM team WHERE teamName = ${teamName}`)
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

export async function searchGameBySingleDate(selectedDate){
  try{
    const[results, fields] = await connection.query(``) //Estudar formatação de dados de date, formato data em HTML ou stringify de date dos dados SQL
  } catch (errors) {
    console.log(errors)
  }
}

export async function listGamesBetweenDates(selectedDateA, selectedDateB){
  try{
    const[results, fields] = await connection.query(``) //Estudar formatação de dados de date, formato data em HTML ou stringify de date dos dados SQL
  } catch (errors) {
    console.log(errors)
  }
}

export async function listGamesByTeam(teamName){
  try{
    const[results, fields] = await connection.query(`SELECT * FROM team A, games B WHERE B.teamName = '${teamName}' AND A.idTeam FROM A = B.idTeam`)
  } catch (errors) {
    console.log(errors)
  }
}
