import {connection} from "../../config/connection.js";

//duas formas para fazer
// na primeira conseguimos fazer um UPDATE, DELETE, INSERT e ainda fazer alguma outra coisa
//Por exemplo inseri um novo jogador e quero retornar a lista com todos os jogadores esse novo jeito faz isso, INSERE E + ação

export async function createUserModel() {
  try {
    await connection.query(`INSERT INTO usuario (name) VALUES (1);`);
    const [results, fields] = await conn.query("SELECT * FROM usuario");
    console.log(results);
    return results;
  } catch (err) {
    console.log(err);
  }
}

//MODO ANTIGO COM A ALTERAÇÃO NO MODO DE EXPORT (NÃO TEM MAIS UM "moducle.export" AGORA É DIRETO "export async function ...")
export async function exemplolistarusuario() {
    return new Promise((resolve, rejects)=>{
        connection.query(`SELECT * FROM usuario`, function(erros,result){
            
            resolve(result)
        })
    })
}

export async function listTeams() {
  return new Promise((resolve, rejects)=>{
      connection.query(`SELECT * FROM usuario`, function(erros,result){
      resolve(result)
      })
  })
}
  
