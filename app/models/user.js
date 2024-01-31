import {connection} from "../../config/connection.js";

export async function pageUser() {
    return new Promise((resolve, rejects)=>{
        connection.query(`SELECT * FROM usuario`, function(erros,result){
            
        resolve(result)
        })
    })
}