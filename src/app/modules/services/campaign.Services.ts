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


export const CampaignServices = { createCampaign }
