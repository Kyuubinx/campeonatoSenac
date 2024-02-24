import { Router } from "express"
import { insertGameController, insertPlayerController, teamsController, searchTeamController, searchPlayerController, searchPlayerTeamController, listPlayersTeamController, updateActiveTeamController, insertTeamController, listGamesController, updatePlayerController, listPositionController,listLeagueController, listGameController, loginController, updateGameController, rankingController, updateCardController, updateGoalsController } from "../controllers/admin.js"

export const adminRouter = Router()

adminRouter.get("/teams", teamsController)

adminRouter.post("/insertGame", insertGameController)
adminRouter.post("/insertTeam", insertTeamController)
adminRouter.post("/insertPlayer", insertPlayerController)
adminRouter.post("/login", loginController)

adminRouter.get("/searchTeamByName/:idTeam", searchTeamController)
adminRouter.get("/searchPlayerById/:idPlayer", searchPlayerController)
adminRouter.get("/searchPlayerByTeam/:idTeam", searchPlayerTeamController)
adminRouter.get("/listPlayersInTeam/:idTeam", listPlayersTeamController)

adminRouter.get("/listPosition", listPositionController)
adminRouter.get("/listGame/:idGame", listGameController)
adminRouter.get("/listGames/:round", listGamesController)
adminRouter.get("/ranking", rankingController)

adminRouter.patch("/updateActiveTeam",updateActiveTeamController)

adminRouter.patch("/updatePlayer", updatePlayerController)
adminRouter.patch("/updateGame", updateGameController)
adminRouter.patch("/updateCard", updateCardController)
adminRouter.patch("/updateGoals", updateGoalsController)
adminRouter.get("/listLeague", listLeagueController)
