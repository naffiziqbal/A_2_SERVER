import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router()


router.post("/create", UserController.createUser)
router.post("/login", UserController.loginUser)
router.get("/:id", UserController.getUser)



export default router
