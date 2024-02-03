import { Router } from "express"
import { players, registerPlayer, registerTeam, teams } from "../controllers/admin.js"


export const adminRouter = Router()

adminRouter.get("/home",teams)
adminRouter.get("/player",players)
adminRouter.post("/registerTeam", registerTeam)
adminRouter.post("/registerPlayer", registerPlayer)
