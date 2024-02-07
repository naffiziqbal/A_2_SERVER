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

const getAllCampaign: RequestHandler = async (req, res) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    try {
        const data = await CampaignServices.getAllCampaign(skip, limit)
        console.log(data)
        res.status(200).json({
            data
        })
    } catch (err: any) {
        res.status(400).json({ error: err.message })
    }
}



export const CampaignController = { createCampaign, getAllCampaign }
