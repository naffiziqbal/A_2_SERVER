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


export const CampaignServices = { createCampaign, getAllCampaign }
