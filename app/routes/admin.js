import { Router } from "express"
import { listGamesBetweenDatesController, playersController, insertPlayerController, teamsController, searchTeamController, searchPlayerController, searchPlayerTeamController, searchPlayerPositionController, listPlayersTeamController, updateActiveTeamController, insertTeamController, listGamesController, updatePlayerController, listGamesInTeamController, listPositionController,listFutureGamesController} from "../controllers/admin.js"


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
adminRouter.get("/listPosition",listPositionController)
adminRouter.get("/listGames", listGamesController)
adminRouter.get("/listGamesInTeam", listGamesInTeamController)
adminRouter.get("/listGamesBetweenDates", listGamesBetweenDatesController)
adminRouter.get("/listFutureGames",listFutureGamesController)

adminRouter.patch("/updateActiveTeam", updateActiveTeamController)
adminRouter.patch("/updatePlayer", updatePlayerController)


