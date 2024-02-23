import { Router } from "express"
import {tokenValidator} from "../middleware/tokenValidator.js"
import { insertGameController, insertPlayerController, teamsController, searchTeamController, searchPlayerController, searchPlayerTeamController, listPlayersTeamController, updateActiveTeamController, insertTeamController, listGamesController, updatePlayerController, listGamesInTeamController, listPositionController, listFutureGamesController, listLeagueController, listGameController, loginController, updateGameController, rankingController, updateCardController, updateGoalsController } from "../controllers/admin.js"

export const adminRouter = Router()

adminRouter.get("/teams", teamsController)

adminRouter.post("/insertGame", tokenValidator ,insertGameController)
adminRouter.post("/insertTeam", tokenValidator ,insertTeamController)
adminRouter.post("/insertPlayer", tokenValidator ,insertPlayerController)
adminRouter.post("/login", loginController)

adminRouter.get("/searchTeamByName/:idTeam", searchTeamController)
adminRouter.get("/searchPlayerById/:idPlayer", searchPlayerController)
adminRouter.get("/searchPlayerByTeam/:idTeam", searchPlayerTeamController)

adminRouter.get("/listPlayersInTeam/:idTeam", listPlayersTeamController)
adminRouter.get("/listPosition", listPositionController)
adminRouter.get("/listGame/:idGame", listGameController)
adminRouter.get("/listGames/:round", listGamesController)
adminRouter.get("/listGamesInTeam/:idTeam", listGamesInTeamController)
adminRouter.get("/listFutureGames", listFutureGamesController)
adminRouter.get("/ranking", rankingController)

adminRouter.patch("/updateActiveTeam", tokenValidator, updateActiveTeamController)
adminRouter.patch("/updatePlayer", tokenValidator, updatePlayerController)
adminRouter.patch("/updateActiveTeam",tokenValidator, updateActiveTeamController)
adminRouter.patch("/updatePlayer",tokenValidator, updatePlayerController)
adminRouter.patch("/updateGame",tokenValidator, updateGameController)
adminRouter.patch("/updateCard", tokenValidator, updateCardController)
adminRouter.patch("/updateGoals", tokenValidator, updateGoalsController)
adminRouter.get("/listLeague", listLeagueController)
