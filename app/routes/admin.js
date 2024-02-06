import { Router } from "express"
import { players, registerPlayer, registerTeam, teams, searchTeam, searchPlayer, searchPlayerTeam, searchPlayerPosition} from "../controllers/admin.js"


export const adminRouter = Router()

adminRouter.get("/home",teams)
adminRouter.get("/player",players)
adminRouter.post("/registerTeam", registerTeam)
adminRouter.post("/registerPlayer", registerPlayer)
adminRouter.get("/searchTeamByName", searchTeam)
adminRouter.get("/searchPlayerByName", searchPlayer)
adminRouter.get("/searchPlayerByTeam", searchPlayerTeam)

adminRouter.get("/searchPlayerByPosition", searchPlayerPosition)
