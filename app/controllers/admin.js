import {connection} from "../../config/connection.js"
import { listTeams } from "../models/admin.js"

export async function admin (req, res){
    return res.status(200).json("sim")
}

export async function teams(req , res){
    const teams = await listTeams()
    if(!teams){
        let erro = "Erro ao encontrar times" 
        return res.status(400).json(erro)
    }
    return res.status(201).json(teams)
}