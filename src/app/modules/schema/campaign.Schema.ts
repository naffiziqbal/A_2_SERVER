//spell-checker:disable

import { Schema, model } from "mongoose";
import { ICAMPAIGN } from "../../types/types";

//* =======================================>
//! CAMPAIGN  AREA ========================>
//* =======================================>

const campaignSchema = new Schema<ICAMPAIGN>({
    creatorId: { type: String, required: true },
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }

})



const Campaign = model<ICAMPAIGN>("Campaign", campaignSchema)
export default Campaign
