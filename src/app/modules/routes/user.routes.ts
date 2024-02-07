import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { JWT } from "../../middleware/jwtVerification";

const router = Router()


router.post("/create", UserController.createUser)
router.post("/login", UserController.loginUser)
router.get("/:id", JWT.verifyToken, UserController.getUser)



export default router
