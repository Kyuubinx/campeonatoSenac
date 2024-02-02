import { Router } from "express"
import { teams } from "../controllers/admin.js"

export const adminRouter = Router()


adminRouter.get("/home",teams)
