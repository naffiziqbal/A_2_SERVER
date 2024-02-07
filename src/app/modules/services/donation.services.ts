//* =======================================>
//! DONATION  AREA ========================>
//* =======================================>

import { IDonation } from "../../types/types"
import Donation from "../schema/donation.Schema"


const createDonation = async (donation: IDonation) => {
    const existingDonation = await Donation.findOne({ campaignId: donation.campaignId })
    console.log(existingDonation, "Existing Donation")
    
    if (!existingDonation) {
        const data = await Donation.create(donation)
        return data
    } else {
        const data = await Donation.findOneAndUpdate({ campaignId: donation.campaignId },
            { $inc: { donationAmount: donation.donationAmount } }
        )
        return data
    }

}

export const DonationServices = { createDonation }
