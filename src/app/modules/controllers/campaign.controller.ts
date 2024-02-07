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

const getSingleCampaign: RequestHandler = async (req, res) => {
    const _id = req.params.id
    try {
        const data = await CampaignServices.getSingleCampaign(_id)
        if (data._id) {
            res.status(200).json({
                data,
            })
        }
        else {
            throw new Error("No Campaign Found")
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}


const updateCampaign: RequestHandler = async (req, res) => {
    const { id } = req.params
    const campaign = req.body
    try {
        const data = await CampaignServices.updateCampaign(id, campaign)
        console.log(data)
        if (data?._id) {
            res.status(200).json({
                success: true,
                data,
                message: "Campaign Updated Successfully"
            })
        }
        else {
            throw new Error("Campaign update failed")
        }


    } catch (error: any) {
        res.status(400).json({ error: error.message })

    }
}

export const CampaignController = { createCampaign, getAllCampaign, getSingleCampaign, updateCampaign }
