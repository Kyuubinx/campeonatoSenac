import { Router } from "express"
import { playersController, insertPlayerController, teamsController, searchTeamController, searchPlayerController, searchPlayerTeamController, searchPlayerPositionController, listGamesTeamController, listPlayersTeamController, updateActiveTeamController, insertTeamController} from "../controllers/admin.js"


export const adminRouter = Router()

adminRouter.get("/home",teamsController)
adminRouter.get("/player",playersController)
adminRouter.post("/insertTeam", insertTeamController)
adminRouter.post("/insertPlayer", insertPlayerController)
adminRouter.get("/searchTeamByName", searchTeamController)
adminRouter.get("/searchPlayerByName", searchPlayerController)
adminRouter.get("/searchPlayerByTeam", searchPlayerTeamController)
adminRouter.get("/listPlayersInTeam", listPlayersTeamController)
adminRouter.patch("/updateActiveTeam", updateActiveTeamController)
adminRouter.get("/listGamesByTeam", listGamesTeamController)
adminRouter.get("/searchPlayerByPosition", searchPlayerPositionController)
