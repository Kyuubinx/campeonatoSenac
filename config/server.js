import {adminRouter} from "../app/routes/admin.js"
import {userRouter} from "../app/routes/user.js"
import express from "express"

export function app_server() {
    
    const app = express();

    app.use(express.json())
    app.use("/admin", adminRouter)
    app.use("/user", userRouter)

    return app
}