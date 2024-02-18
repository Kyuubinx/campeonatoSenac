import { Router } from "express"
import { playersController, insertPlayerController, teamsController, searchTeamController, searchPlayerController, searchPlayerTeamController, listPlayersTeamController, updateActiveTeamController, insertTeamController, listGamesController, updatePlayerController, listGamesInTeamController, listPositionController, listFutureGamesController, listLeagueController } from "../controllers/admin.js"

export const adminRouter = Router()

adminRouter.get("/teams", teamsController)
adminRouter.get("/players", playersController)

adminRouter.post("/insertTeam", insertTeamController)
adminRouter.post("/insertPlayer", insertPlayerController)

adminRouter.get("/searchTeamByName", searchTeamController)
adminRouter.get("/searchPlayerByName", searchPlayerController)
adminRouter.get("/searchPlayerByTeam", searchPlayerTeamController)

adminRouter.get("/listPlayersInTeam", listPlayersTeamController)
adminRouter.get("/listPosition", listPositionController)
adminRouter.get("/listGames", listGamesController)
adminRouter.get("/listGamesInTeam", listGamesInTeamController)
adminRouter.get("/listFutureGames", listFutureGamesController)

adminRouter.patch("/updateActiveTeam", updateActiveTeamController)
adminRouter.patch("/updatePlayer", updatePlayerController)

adminRouter.get("/listLeague", listLeagueController)


