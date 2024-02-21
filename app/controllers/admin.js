import {connection} from "../../config/connection.js"
import moment from "moment"
import {listTeamsModel, insertTeamModel, searchTeamByNameModel, listPlayersModel, listPlayersInTeamModel, insertPlayerModel, searchPlayerByNameModel, searchPlayerByTeamModel, updateTeamActiveModel, listGamesModel, updatePlayerModel, listGamesInTeamModel, listPositionModel, listFutureGamesModel, listLeagueModel, insertGameModel, listGameModel, loginModel, updatePoint} from "../models/admin.js"

export async function admin (req, res){
    return res.status(200).json("tela home do admin")
}

export async function teamsController(req, res){
    const teams = await listTeamsModel()
    if(!teams){
        let erro = "Erro ao encontrar times" 
        return res.status(400).json(erro)
    }
    return res.status(200).json(teams)
}
export async function insertTeamController(req, res){    
    
    const teamName = req.body.teamName
    const teamTag = req.body.teamTag

    const registerTeam = await insertTeamModel(teamName, teamTag)
    if(!registerTeam){
        let erro = "Erro ao cadastrar time"
        return res.status(400).json(erro)
    }
    return res.status(201).json(registerTeam)
}

export async function insertGameController(req, res){    
    
    const teamHome = req.body.teamHome
    const teamAway = req.body.teamAway
    const round = req.body.round
    const league = req.body.league
    const registerGame = await insertGameModel(teamHome, teamAway, round, league)
    if(!registerGame){
        let erro = "Erro ao cadastrar time"
        return res.status(400).json(erro)
    }
    return res.status(201).json(registerGame)
}

export async function searchTeamController(req, res){

    const idTeam = req.params.idTeam

    const searchTeam = await searchTeamByNameModel(idTeam)

    if(!searchTeam){
        let erro = "Erro ao pesquisar time"
        return res.status(400).json(erro)
    }
    return res.status(200).json(searchTeam)
}
export async function updateActiveTeamController(req, res){
    const idTeam = req.body.idTeam
    const active = req.body.active

    const updateTeam = await updateTeamActiveModel(idTeam,active)

    if(!updateTeam){
        let erro = "Erro ao fazer alteração no time"
        return res.status(400).json(erro)
    }
    return res.status(200).json(updateTeam)
}
export async function listGamesInTeamController(req, res){
    const idTeam = req.params.idTeam

    const listGamesInTeam = await listGamesInTeamModel(idTeam)

    if(!listGamesInTeam){
        let erro = "Erro ao listar jogos do time"
        return res.status(400).json(erro)
    }
    return res.status(200).json(listGamesInTeam)
}

export async function playersController(req, res){
    const players = await listPlayersModel()
    if(!players){
        let erro = "Erro ao encontrar jogadores"
        return res.status(400).json(erro)
    }
    return res.status(200).json(players)
} 
export async function listPlayersTeamController(req, res){

    const idTeam = req.params.idTeam

    const team = await listPlayersInTeamModel(idTeam)

    if(!team){
        let erro = "Erro ao encontrar jogadores do time"
        return res.status(400).json(erro)
    }
    return res.status(200).json(team)
} 
export async function insertPlayerController(req, res){

    const playerName = req.body.playerName
    const idTeam = req.body.idTeam
    const age = req.body.age
    const idPosition = req. body.idPosition
    const status = req.body.status 

    const registerPlayer = await insertPlayerModel(playerName, idTeam, age, idPosition, status)

    if(!registerPlayer){
        let erro = "Erro ao cadastrar jogador"
        return res.status(400).json(erro)
    }
    return res.status(201).json(registerPlayer)
}
export async function searchPlayerController(req, res){

    const idPlayer = req.params.idPlayer

    const searchPlayer = await searchPlayerByNameModel(idPlayer)

    if(!searchPlayer){
        let erro = "Erro ao pesquisar jogador"
        return res.status(400).json(erro)
    }
    return res.status(200).json(searchPlayer)
}
export async function searchPlayerTeamController(req,res){
    const idTeam = req.params.idTeam

    const searchPlayerTeam = await searchPlayerByTeamModel(idTeam)

    if(!searchPlayerTeam){
        let erro = "Erro ao pesquisar jogadores do time"
        return res.status(400).json(erro)
    }
    return res.status(200).json(searchPlayerTeam)
}
export async function updatePlayerController(req, res){
    const idPlayer = req.body.idPlayer
    const age = req.body.age
    const status = req.body.status

    const updatePlayer = await updatePlayerModel(idPlayer, playerName, status)

    if(!updatePlayer){
        let erro = "Erro ao fazer alteração no jogador"
        return res.status(400).json(erro)
    }
    return res.status(200).json(updatePlayer)
}
export async function updateGameController(req, res){

    const idGame = req.body.idGame
    const goalHome = req.body.goalHome
    const goalAway = req.body.goalAway
    const cardHome = req.body.cardHome
    const cardAway = req.body.cardAway

    const updatePlayer = await updatePoint(idGame, goalHome, goalAway, cardHome, cardAway)

    if(!updatePlayer){
        let erro = "Erro ao fazer alteração de vitória"
        return res.status(400).json(erro)
    }
    return res.status(200).json(updatePlayer)
}

export async function listGamesController(req, res){
    
    const round = req.params.round

    const listGames = await listGamesModel(round)

    if(!listGames){
        let erro = "Erro ao pesquisar jogos do time"
        return res.status(400).json(erro)
    }
    return res.status(200).json(listGames)
}
export async function listPositionController(req, res){
    const listPosition = await listPositionModel()
    
    return res.status(200).json(listPosition)
}

export async function listLeagueController(req, res){
    const listPosition = await listLeagueModel()
    
    return res.status(200).json(listPosition)
}

export async function listFutureGamesController(req,res){
    const formatDate = moment().format()
    const listFutureGames = await listFutureGamesModel(formatDate)

    return res.status(200).json(listFutureGames)
}

export async function listGameController(req, res){
    const idGame = req.params.idGame

    const listGame = await listGameModel(idGame)

    if(!listGame){
        let erro = "Erro ao listar jogos do time"
        return res.status(400).json(erro)
    }
    return res.status(200).json(listGame)
}
export async function loginController(req, res){
    const userName = req.body.userName
    const password = req.body.password

    const user = await loginModel(userName,password)
    return res.status(200).json(user)
}

export async function validateController(req, res){
    
}