import {connection} from "../../config/connection.js"
import { insertTeam, listTeams, insertPlayer, listPlayers} from "../models/admin.js"

export async function admin (req, res){
    return res.status(200).json("sim")
}

export async function teams(req, res){
    const teams = await listTeams()
    if(!teams){
        let erro = "Erro ao encontrar times" 
        return res.status(400).json(erro)
    }
    return res.status(200).json(teams)
}

export async function players(req, res){
    const players = await listPlayers()
    if(!players){
        let erro = "Erro ao encontrar jogadores"
        return res.status(400).json(erro)
    }
    return res.status(200).json(players)
} 

export async function registerTeam(req, res){    
    
    const teamName = req.body.teamName
    const teamTag = req.body.teamTag

    const registerTeam = await insertTeam(teamName, teamTag)
    if(!registerTeam){
        let erro = "Erro ao cadastrar time"
        return res.status(400).json(erro)
    }
    return res.status(200).json(registerTeam)
}

export async function registerPlayer(req, res){

    const playerName = req.body.playerName
    const idTeam = req.body.idTeam
    const goal = req.body.goal
    const age = req.body.age
    const idPosition = req. body.idPosition
    const idStatus = req.body.idStatus 

    const registerPlayer = await insertPlayer(playerName, idTeam, goal, age, idPosition, idStatus)
    if(!registerPlayer){
        let erro = "Erro ao cadastrar jogador"
        return res.status(400).json(erro)
    }
    return res.status(200).json(registerPlayer)
}