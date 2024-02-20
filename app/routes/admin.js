import { Router } from "express"
import { insertGameController, playersController, insertPlayerController, teamsController, searchTeamController, searchPlayerController, searchPlayerTeamController, listPlayersTeamController, updateActiveTeamController, insertTeamController, listGamesController, updatePlayerController, listGamesInTeamController, listPositionController, listFutureGamesController, listLeagueController, listGameController } from "../controllers/admin.js"

export const adminRouter = Router()

adminRouter.get("/teams", teamsController)
adminRouter.get("/players", playersController)

adminRouter.post("/insertGame", insertGameController)
adminRouter.post("/insertTeam", insertTeamController)
adminRouter.post("/insertPlayer", insertPlayerController)

adminRouter.get("/searchTeamByName/:teamName", searchTeamController)
adminRouter.get("/searchPlayerByName/:playerName", searchPlayerController)
adminRouter.get("/searchPlayerByTeam/:teamName", searchPlayerTeamController)

adminRouter.get("/listPlayersInTeam/:idTeam", listPlayersTeamController)
adminRouter.get("/listPosition", listPositionController)
adminRouter.get("/listGame/:idGame", listGameController)
adminRouter.get("/listGames", listGamesController)
adminRouter.get("/listGamesInTeam/:idTeam", listGamesInTeamController)
adminRouter.get("/listFutureGames", listFutureGamesController)

adminRouter.patch("/updateActiveTeam", updateActiveTeamController)
adminRouter.patch("/updatePlayer", updatePlayerController)

adminRouter.get("/listLeague", listLeagueController)


