//* =======================================>
//! CAMPAIGN  AREA ========================>
//* =======================================>

import { RequestHandler } from "express";
import { CampaignServices } from "../services/campaign.Services";


const createCampaign: RequestHandler = async (req, res) => {
    const campaign = req.body
    try {
        const data = await CampaignServices.createCampaign(campaign)
        // console.log(data)
        res.status(201).json({
            data,
            success: true,
            message: "Campaign created successfully",
        })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}


export const CampaignController = { createCampaign }
