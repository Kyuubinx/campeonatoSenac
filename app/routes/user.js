import {Router} from "express"
import { home } from "../controllers/user.js"

export const userRouter = Router()

userRouter.get("/home",home)