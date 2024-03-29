//* =======================================>
//! CAMPAIGN  AREA ========================>
//* =======================================>

import { Router } from "express";
import { CampaignController } from "../controllers/campaign.controller";


const router = Router()


router.post('/create', CampaignController.createCampaign)
router.get('/all-campaign', CampaignController.getAllCampaign)
router.get('/:id', CampaignController.getSingleCampaign)
router.patch('/update/:id', CampaignController.updateCampaign)



export default router
