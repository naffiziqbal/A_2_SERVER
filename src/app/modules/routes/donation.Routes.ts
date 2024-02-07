//* =======================================>
//! DONATION  AREA ========================>
//* =======================================>

import { Router } from "express";
import { DonationController } from "../controllers/donation.controller";


const router = Router()

router.post('/create/', DonationController.createDonation)


export default router
