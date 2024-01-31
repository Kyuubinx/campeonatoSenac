import { Router } from "express"
import { admin } from "../controllers/admin.js"

export const adminRouter = Router()


adminRouter.get("",admin)
adminRouter.post("/inserirUsuario",admin)
