import { Router } from "express"
import { playersController, insertPlayerController, teamsController, searchTeamController, searchPlayerController, searchPlayerTeamController, searchPlayerPositionController, listPlayersTeamController, updateActiveTeamController, insertTeamController, listGamesController, updatePlayerController, listGamesInTeamController} from "../controllers/admin.js"


export const adminRouter = Router()

adminRouter.get("/home",teamsController)
adminRouter.get("/player",playersController)

adminRouter.post("/insertTeam", insertTeamController)
adminRouter.post("/insertPlayer", insertPlayerController)

adminRouter.get("/searchTeamByName", searchTeamController)
adminRouter.get("/searchPlayerByName", searchPlayerController)
adminRouter.get("/searchPlayerByTeam", searchPlayerTeamController)
adminRouter.get("/searchPlayerByPosition", searchPlayerPositionController)

adminRouter.get("/listPlayersInTeam", listPlayersTeamController)
adminRouter.get("/listGames", listGamesController)
adminRouter.get("/listGamesInTeam", listGamesInTeamController)

adminRouter.patch("/updateActiveTeam", updateActiveTeamController)
adminRouter.patch("/updatePlayer", updatePlayerController)

