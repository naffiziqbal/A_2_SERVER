//* =======================================>
//! DONATION  AREA ========================>
//* =======================================>

import { Schema, model } from "mongoose";
import { IDonation } from "../../types/types";


const donationSchema = new Schema<IDonation>({
    campaignId: { type: String, required: true },
    campaignTitle: { type: String, required: true },
    donationAmount: { type: Number, required: true },
    donatorId: { type: String, required: true },
    donatorName: { type: String, required: true }
})


const Donation = model<IDonation>("Donation", donationSchema)

export default Donation
