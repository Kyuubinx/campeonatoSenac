import {connection} from "../../config/connection.js";

export async function listUsers() {
  try {
    const [results, fields] = await connection.query("SELECT * FROM user");
    return results;
  } catch (errors) {
    console.log(errors);
  }
}

export async function listTeams() {
  try{
    const [results, fields] = await connection.query(`SELECT * FROM team`)
    return results;
  } catch (errors){
    console.log(errors)
  }

}

