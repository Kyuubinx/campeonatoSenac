import {connection} from "../../config/connection.js"
import moment from "moment"
import {listTeamsModel, insertTeamModel, searchTeamByNameModel, listPlayersModel, listPlayersInTeamModel, insertPlayerModel, searchPlayerByNameModel, searchPlayerByTeamModel, updateTeamActiveModel, listGamesModel, updatePlayerModel, listGamesInTeamModel, listPositionModel, listFutureGamesModel, listLeagueModel} from "../models/admin.js"

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
export async function searchTeamController(req, res){

    const teamName = req.body.teamName

    const searchTeam = await searchTeamByNameModel(teamName)

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
    const idTeam = req.body.idTeam

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

    const idTeam = req.body.idTeam

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
    const idStatus = req.body.idStatus 

    const registerPlayer = await insertPlayerModel(playerName, idTeam, age, idPosition, idStatus)

    if(!registerPlayer){
        let erro = "Erro ao cadastrar jogador"
        return res.status(400).json(erro)
    }
    return res.status(201).json(registerPlayer)
}
export async function searchPlayerController(req, res){

    const playerName = req.body.playerName

    const searchPlayer = await searchPlayerByNameModel(playerName)

    if(!searchPlayer){
        let erro = "Erro ao pesquisar jogador"
        return res.status(400).json(erro)
    }
    return res.status(200).json(searchPlayer)
}
export async function searchPlayerTeamController(req,res){
    const teamName = req.body.playerTeam

    const searchPlayerTeam = await searchPlayerByTeamModel(teamName)

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

export async function listGamesController(req, res){
    
    const gameTeam = req.body.gameTeam

    const listGames = await listGamesModel()

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