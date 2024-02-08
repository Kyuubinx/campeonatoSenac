import {connection} from "../../config/connection.js";

export async function listUsersModel() {
  try{
    const [results, fields] = await connection.query("SELECT * FROM user");
    return results;
  } catch (errors) {
    console.log(errors);
  }
}

export async function listTeamsModel() {
  try{
    const [results, fields] = await connection.query(`SELECT * FROM team`)
    return results;
  } catch (errors){
    console.log(errors)
  }
}

export async function listPlayersModel() {
  try{
    const [results, fields] = await connection.query(`SELECT * FROM player`)
    return results;
  } catch (errors){
    console.log(errors)
  }
}

export async function listPlayersInTeamModel(idTeam){
  try {
    const[results, fields] = await connection.query(`SELECT * FROM player WHERE idTeam = ${idTeam}`)    
    return results
  }catch(errors){
    console.log(errors)
}
}

export async function insertTeamModel(teamName, teamTag) {
  
  const findTeam = await searchTeamByNameModel(teamName)
  
  if(findTeam.length > 0){
    return false
  }

  try{
    const [results, fields] = await connection.query(`INSERT INTO team (idTeam, teamName, teamTag, idGender, idLeague) VALUES (null, '${teamName}', '${teamTag}', 1, 1)`)
    return results;
  } catch (errors){
    console.log(errors)
  }
}

export async function insertPlayerModel(playerName, idTeam, goal, age, idPosition, idStatus) {

  const findPlayer = await searchPlayerByNameModel(playerName)
  
  if(findPlayer.length > 0){
    return false
  }

  try{
    const [results, fields] = await connection.query(`INSERT INTO player (idPlayer, playerName, idTeam, goal, photo, age, idPosition, idStatus) VALUES (null, '${playerName}', ${idTeam}, ${goal}, '...', ${age}, ${idPosition}, ${idStatus})`)
    return results;
  } catch (errors){
    console.log(errors)
  }
}

export async function searchTeamByNameModel(teamName){
  try{
    const[results, fields] = await connection.query(`SELECT * FROM team WHERE teamName = '${teamName}'`)
    return results; 
  } catch (errors) {
    console.log(errors)
  }
}

export async function searchPlayerByNameModel(playerName){
  try{
      const[results, fields] = await connection.query(`SELECT * FROM player WHERE playerName = '${playerName}'`)
      return results; 
  } catch (errors) {
      console.log(errors)
  }
}

export async function searchPlayerByTeamModel(teamName){
  try{
      const[results, fields] = await connection.query(`SELECT * FROM player B, team A WHERE A.teamName = '${teamName}' and B.idTeam = A.idTeam;`)
      return results
  } catch (errors) {
      console.log(errors)
  }
}

export async function searchPlayerByPositionModel(description){ 
  try{
      const[results, fields] = await connection.query(`SELECT * FROM  player A, position B WHERE B.description = '${description}' AND A.idPosition = B.idPosition`)
      return results
  } catch (errors) {
      console.log(errors)
  }
}


export async function updateTeamActiveModel(idTeam,active){
  try{
    const[result,fiels] = await connection.query(`UPDATE team set active = "${active}" WHERE idTeam = ${idTeam}`)
    return result
  } catch (errors){
    console.log(errors)
  }
}














export async function listGamesByTeamModel(gameTeam){
  
  try{
    const[results, fields] = await connection.query(`SELECT * FROM team A, game B WHERE A.teamName = '${gameTeam}' AND A.idTeam = B.id`)
    return results
  } catch (errors) {
    console.log(errors)
  }
}

/////////////////////




//Select de strings fixas, stringify

export async function searchTeamByLeague(leagueName){ 
  try{
    const[results, fields] = await connection.query(`SELECT * FROM team B, league A WHERE A.leagueName = '${leagueName}' and B.idLeague = A.idLeague;`)
  } catch (errors) {
    console.log(errors)
  }
}
//////////////////////

export async function searchGameBySingleDate(selectedDate){
  try{
    const[results, fields] = await connection.query(``) //Estudar formatação de dados de date, formato data em HTML ou stringify de date dos dados SQL
    return results
  } catch (errors) {
    console.log(errors)
  }
}

export async function listGamesBetweenDates(selectedDateA, selectedDateB){
  try{
    const[results, fields] = await connection.query(``) //Estudar formatação de dados de date, formato data em HTML ou stringify de date dos dados SQL
    return results
  } catch (errors) {
    console.log(errors)
  }
}




