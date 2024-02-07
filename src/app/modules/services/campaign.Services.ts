//* =======================================>
//! CAMPAIGN  AREA ========================>
//* =======================================>

import { ICAMPAIGN } from "../../types/types"
import Campaign from "../schema/campaign.Schema"


const createCampaign = async (campaign: ICAMPAIGN) => {
    const data = await Campaign.create(campaign)
    if (data._id) return data
    throw new Error("Campaign Creation Failed")
}

const getAllCampaign = async (skip: any, limit: any) => {
    const data = await Campaign.find({})
        .skip(skip)
        .limit(limit)
    return data
}

const getSingleCampaign = async (_id: string) => {
    const data = await Campaign.findOne({ _id })
    if (data?._id) return data
    throw new Error("No Campaign Found")
}


const updateCampaign = async (id: string, campaign: ICAMPAIGN) => {
    const data = await Campaign.findOneAndUpdate({ _id: id }, campaign, { new: true })
    console.log(data)
    return data
}

export const CampaignServices = { createCampaign, getAllCampaign, getSingleCampaign, updateCampaign }
