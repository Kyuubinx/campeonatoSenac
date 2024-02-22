import { Router } from "express"
<<<<<<< HEAD
import { insertGameController, playersController, insertPlayerController, teamsController, searchTeamController, searchPlayerController, searchPlayerTeamController, listPlayersTeamController, updateActiveTeamController, insertTeamController, listGamesController, updatePlayerController, listGamesInTeamController, listPositionController, listFutureGamesController, listLeagueController, listGameController, loginController, updateGameController } from "../controllers/admin.js"
import { tokenValidator } from "../middleware/tokenValidator.js"
=======
import {tokenValidator} from "../middleware/tokenValidator.js"
import { insertGameController, playersController, insertPlayerController, teamsController, searchTeamController, searchPlayerController, searchPlayerTeamController, listPlayersTeamController, updateActiveTeamController, insertTeamController, listGamesController, updatePlayerController, listGamesInTeamController, listPositionController, listFutureGamesController, listLeagueController, listGameController, loginController, updateGameController } from "../controllers/admin.js"
>>>>>>> 9b86386bffa9d0b5ac404ba960a45d867de52245

export const adminRouter = Router()

adminRouter.get("/teams", teamsController)
adminRouter.get("/players", playersController)

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

adminRouter.patch("/updateActiveTeam", tokenValidator ,updateActiveTeamController)
adminRouter.patch("/updatePlayer", tokenValidator ,updatePlayerController)
adminRouter.patch("/updateActiveTeam", tokenValidator ,updateActiveTeamController)
adminRouter.patch("/updatePlayer", tokenValidator ,updatePlayerController)
adminRouter.patch("/updateGame", tokenValidator ,updateGameController)

adminRouter.get("/listLeague", listLeagueController)
