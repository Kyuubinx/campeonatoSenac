import {connection} from "../../config/connection.js"
import { prevGames } from "../models/user.js"

export async function home (req, res){
    const home = await prevGames()
    if(!home){
        error = "Erro ao abrir tela"
        return res.status(400).json(error)
    }
    return res.status(200).json(home)
}