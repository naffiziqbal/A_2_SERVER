//* =======================================>
//! CAMPAIGN  AREA ========================>
//* =======================================>

import { Router } from "express";
import { CampaignController } from "../controllers/campaign.controller";


const router = Router()


router.post('/create', CampaignController.createCampaign)



export default router
