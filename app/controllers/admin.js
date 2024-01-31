import {connection} from "../../config/connection.js"
import { createUserModel } from "../models/admin.js"

export async function admin (req, res){
    return res.status(200).json("sim")
}

export async function pageAdmin(req , res){
    const listTeam = await createUserModel()
    if(!createUser){
       let erro = "Erro ao encontrar times" 
        return res.status(400).json(erro)
    }
    return res.status(201).json(createUser)
}