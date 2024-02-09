//* =======================================>
//! DONATION  AREA ========================>
//* =======================================>

import { Router } from "express";
import { DonationController } from "../controllers/donation.controller";


const router = Router()

router.post('/create', DonationController.createDonation)
router.get('/all-donations', DonationController.getAllDonation)
router.get('/donations-by-campaign/:id', DonationController.getDonationByCampaign)
router.get('/donations-by-user', DonationController.getDonationByUser)


export default router
