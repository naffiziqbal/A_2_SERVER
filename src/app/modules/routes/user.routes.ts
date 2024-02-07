
import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { JWT } from "../../middleware/jwtVerification";


//* =======================================>
//! USER  AREA ========================>
//* =======================================>

const router = Router()


router.post("/create", UserController.createUser)
router.post("/login", UserController.loginUser)
router.get("/:id", JWT.verifyToken, UserController.getUser)
router.patch("/create-admin", UserController.createAdmin)



export default router
