import {connection} from "../../config/connection.js"
import {listTeamsModel, searchPlayerByPositionModel, insertTeamModel, searchTeamByNameModel, listPlayersModel, listPlayersInTeamModel, insertPlayerModel, searchPlayerByNameModel, searchPlayerByTeamModel, listGamesByTeamModel, updateTeamActiveModel} from "../models/admin.js"

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
    return res.status(200).json(registerTeam)
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

    const deleteTeam = await updateTeamActiveModel(idTeam,active)

    if(!deleteTeam){
        let erro = "Erro ao deletar time"
        return res.status(400).json(erro)
    }
    return res.status(200).json(deleteTeam)
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
    const goal = req.body.goal
    const age = req.body.age
    const idPosition = req. body.idPosition
    const idStatus = req.body.idStatus 

    const registerPlayer = await insertPlayerModel(playerName, idTeam, goal, age, idPosition, idStatus)

    if(!registerPlayer){
        let erro = "Erro ao cadastrar jogador"
        return res.status(400).json(erro)
    }
    return res.status(200).json(registerPlayer)
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
export async function searchPlayerPositionController(req, res){

    const description = req.body.description

    const searchPlayerPosition = await searchPlayerByPositionModel(description)

    if(!searchPlayerPosition){
        let erro = "Erro ao pesquisar jogadores pela posição"
        return res.status(400).json(erro)
    }
    return res.status(200).json(searchPlayerPosition)
}
export async function listGamesTeamController(req, res){
    
    const gameTeam = req.body.gameTeam

    const listGamesTeam = await listGamesByTeamModel(gameTeam)

    if(!listGamesTeam){
        let erro = "Erro ao pesquisar jogos do time"
        return res.status(400).json(erro)
    }
    return res.status(200).json(listGamesTeam)
}