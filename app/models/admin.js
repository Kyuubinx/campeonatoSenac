import { connection } from "../../config/connection.js";
import  JWT  from "jsonwebtoken";

export async function listUsersModel() {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM users`)
    return results;
  } catch (errors) {
    console.log(errors)
  }
}
export async function listTeamsModel() {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM team`)
    return results;
  } catch (errors) {
    console.log(errors)
  }
}
export async function listLeagueModel() {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM league`)
    return results;
  } catch (errors) {
    console.log(errors)
  }
}
export async function listPlayersInTeamModel(idTeam) {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM player A, team B, position C WHERE A.idTeam = B.idTeam AND A.idPosition = C.idPosition AND A.idTeam = '${idTeam}'`)
    return results
  } catch (errors) {
    console.log(errors)
  }
}
export async function listPositionModel() {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM position`)
    return results;
  } catch (errors) {
    console.log(errors)
  }
}
export async function listGamesModel(round) {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM game WHERE round = ${round}`)
    return results
  } catch (errors) {
    console.log(errors)
  }
}
export async function listGamesInTeamModel(idTeam) {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM game WHERE idTeamHome = '${idTeam}' OR idTeamAway = '${idTeam}'`)
    return results
  } catch (errors) {
    console.log(errors)
  }
}
export async function insertTeamModel(teamName, teamTag) {

  const findTeam = await searchTeamByNameModel(teamName)

  if (findTeam.length > 0) {
    return false
  }
  try {
    const [results, fields] = await connection.query(`INSERT INTO team (idTeam, teamName, teamTag, gender, idLeague) VALUES (null, '${teamName}', '${teamTag}', 'M', 1)`)
    return results;
  } catch (errors) {
    console.log(errors)
  }
}
export async function insertGameModel(idTeamHome, idTeamAway, round, idLeague) {
 
  try {
    const [results, fields] = await connection.query(`INSERT INTO game(idGame, idTeamHome, idTeamAway, round, goalHome, goalAway, idLeague, cardHome, cardAway, dateGame, active) VALUES (null,${idTeamHome},${idTeamAway},${round},0,0,${idLeague},0,0,null,"false")`)
    console.log(results, fields)
    const updateActive = updateLeagueActiveModel(idLeague)
    if(updateActive.length < 0){
      return false
    }else{
      return results;
    }

  } catch (errors) {
    console.log(errors)
  }
}
export async function insertPlayerModel(playerName, idTeam, age, idPosition, status) {
  try {
    const [results, fields] = await connection.query(`INSERT INTO player (idPlayer, playerName, idTeam, age, idPosition, status) VALUES (null, '${playerName}', ${idTeam}, ${age}, ${idPosition}, '${status}')`)
    return results;
  } catch (errors) {
    console.log(errors)
  }
}
export async function updateStatusLeague(league) {
  try {
    const [result, fiels] = await connection.query(`UPDATE league set active = "true" WHERE idLeague = ${league}`)
    return result
  } catch (errors) {
    console.log(errors)
  }
}
export async function updateTeamActiveModel(idTeam, active) {
  try {
    const [result, fiels] = await connection.query(`UPDATE team set active = "${active}" WHERE idTeam = ${idTeam}`)
    return result
  } catch (errors) {
    console.log(errors)
  }
}
export async function updatePlayerModel(idPlayer, playerName, status) {
  try {
    const [result, fiels] = await connection.query(`UPDATE player set playerName = "${playerName}", status = "${status}" where idPlayer = ${idPlayer}`)
    return result
  } catch (errors) {
    console.log(errors)
  }
}
export async function updateLeagueActiveModel(idLeague) {
  try {
    const [result, fiels] = await connection.query(`UPDATE league set active = "true" WHERE  idLeague = ${idLeague}`)
    return result
  } catch (errors) {
    console.log(errors)
  }
}
export async function updatePointModel(idGame, goalHome, goalAway, cardHome, cardAway) {
  try {

    const [result, fiels] = await connection.query(`UPDATE game SET goalHome = ${goalHome} , goalAway = ${goalAway}, cardHome = ${cardHome}, cardAway = ${cardAway}, active = "true"  WHERE idGame= ${idGame}`)
    return result
  } catch (errors) {
    console.log(errors)
  }
}
export async function searchTeamByNameModel(teamName) {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM team WHERE teamName = '${teamName}'`)
    return results;
  } catch (errors) {
    console.log(errors)
  }
}
export async function searchPlayerByNameModel(idPlayer) {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM player A, team B, position C WHERE A.idTeam = B.idTeam AND A.idPosition = C.idPosition AND A.idPlayer ='${idPlayer}'`)
    return results;
  } catch (errors) {
    console.log(errors)
  }
}
export async function searchPlayerByTeamModel(idTeam) {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM player B, team A WHERE A.idTeam = '${idTeam}' and B.idTeam = A.idTeam;`)
    return results
  } catch (errors) {
    console.log(errors)
  }
}
export async function listFutureGamesModel(dateGame) {
  try {
    const [results, fields] = await connection.query(`SELECT * from game WHERE dateGame > '${dateGame}'`)
    return results
  } catch (errors) {
    console.log(errors)
  }
}

export async function listGameModel(idGame) {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM game WHERE idGame = ${idGame}`)
    return results
  } catch (errors) {
    console.log(errors)
  }
}
export async function loginModel(userName,password) {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM user WHERE userName = '${userName}' AND password = '${password}'`)

    const token = JWT.sign({
      admin : true, typeAdmin : "admin", idType : results[0].idUser
    },"IBUJHHY7BGFTRFPs$",
    {
      expiresIn: "24h",
      subject: String(results[0].idUser)
    }
    )
    const user = {
      ...results[0],
      token: token
    }
    console.log(user)
    return user
  } catch (errors) {
    console.log(errors)
  }
}
export async function orderTeamByPoints() {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM ranking order by points DESC;`)
    return results
  } catch (errors) {
    console.log(errors)
  }
}
export async function updateCardModel(cardHome,cardAway, idGame){
  try {
    const [result, fields] = await connection.query(`UPDATE game SET cardHome = ${cardHome}, cardAway = ${cardAway}, active = "false" WHERE idGame = ${idGame} `)
    return result
  } catch (errors) {
    console.log(errors)
  }
}
export async function updateGoalModel(goalAway, goalHome, idGame){
  try {
    const [result, fields] = await connection.query(`UPDATE game SET goalHome = ${goalHome}, goalAway = ${goalAway}, active = "false" WHERE idGame = ${idGame} `)
    return result
  } catch (errors) {
    console.log(errors)
  }
}