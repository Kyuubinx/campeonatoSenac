import {connection} from "../../config/connection.js"
import { createUserModel } from "../models/admin.js"

export async function admin (req, res){
    return res.status(200).json("sim")
}

export async function createUserController(req , res){
    req.dados
    const createUser = await createUserModel()
    if(!createUser){
        return res.status(400).json("sim")
    }
    return res.status(201).json("sim")
}