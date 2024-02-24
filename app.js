import { connection } from "./config/connection.js";
import { app_server } from "./config/server.js"

const app = app_server()
await connection.connect()
app.listen(3000, function(){
    console.log('is on hand')
});


