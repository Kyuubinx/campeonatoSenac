import {connection} from "../../config/connection.js"
import { createUserModel } from "../models/admin.js"
import { pageUser } from "../models/user.js"

export async function home (req, res){
    const pageHome = pageUser()
    if(!pageHome){
        erro = "Erro ao abrir tela"
        return res.status(400).json(erro)
    }
    return res.status(200).json(pageUser)
}