import { connection } from "../../config/connection.js";

export async function listTeamsModel() {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM team`)
    return results;
  } catch (errors) {
    console.log(errors)
  }
}

export async function listPlayersModel() {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM player`)
    return results;
  } catch (errors) {
    console.log(errors)
  }
}

export async function listPlayersInTeamModel(idTeam) {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM player WHERE idTeam = ${idTeam}`)
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

export async function insertPlayerModel(playerName, idTeam, age, idPosition, status) {

  const findPlayer = await searchPlayerByNameModel(playerName)

  if (findPlayer.length > 0) {
    return false
  }

  try {
    const [results, fields] = await connection.query(`INSERT INTO player (idPlayer, playerName, idTeam, photo, age, idPosition, status) VALUES (null, '${playerName}', ${idTeam}, "SEM FOTO", ${age}, ${idPosition}, '${status}')`)
    return results;
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

export async function searchTeamByNameModel(teamName) {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM team WHERE teamName = '${teamName}'`)
    return results;
  } catch (errors) {
    console.log(errors)
  }
}

export async function searchPlayerByNameModel(playerName) {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM player WHERE playerName = '${playerName}'`)
    return results;
  } catch (errors) {
    console.log(errors)
  }
}

export async function searchPlayerByTeamModel(teamName) {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM player B, team A WHERE A.teamName = '${teamName}' and B.idTeam = A.idTeam;`)
    return results
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
    const [result, fiels] = await connection.query(`UPDATE player set playerName = ${playerName}, status = "${status}" where idPlayer = ${idPlayer}`)
    return result
  } catch (errors) {
    console.log(errors)
  }
}

export async function listGamesModel() {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM game`)
    return results
  } catch (errors) {
    console.log(errors)
  }
}

export async function listGamesInTeamModel(idTeam) {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM game WHERE teamHome = '${idTeam}' OR teamAway = '${idTeam}'`)
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




