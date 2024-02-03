import {connection} from "../../config/connection.js";

export async function listUsers() {
  try{
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

export async function listPlayers() {
  try{
    const [results, fields] = await connection.query(`SELECT * FROM player`)
    return results;
  } catch (errors){
    console.log(errors)
  }
}

export async function insertTeam(teamName, teamTag) {
  try{
    const [results, fields] = await connection.query(`INSERT INTO team (idTeam, teamName, teamTag, idGender, idLeague) VALUES (null, '${teamName}', '${teamTag}', 1, 1)`)
    return results;
  } catch (errors){
    console.log(errors)
  }
}

export async function insertPlayer(playerName, idTeam, goal, age, idPosition, idStatus) {
  try{
    const [results, fields] = await connection.query(`INSERT INTO player (idPlayer, playerName, idTeam, goal, photo, age, idPosition, idStatus) VALUES (null, '${playerName}', ${idTeam}, ${goal}, '...', ${age}, ${idPosition}, ${idStatus})`)
    return results;
  } catch (errors){
    console.log(errors)
  }
}


