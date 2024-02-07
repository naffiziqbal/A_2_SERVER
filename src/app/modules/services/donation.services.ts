//* =======================================>
//! DONATION  AREA ========================>
//* =======================================>

import { IDonation } from "../../types/types"
import Donation from "../schema/donation.Schema"


const createDonation = async (donation: IDonation) => {
    const data = await Donation.create(donation)
    if (data._id) {
        return data
    }
    throw new Error("Something Went Wrong")
}


const getAllDonation = async () => {
    const data = await Donation.find({})
    return data
}

export const DonationServices = { createDonation, getAllDonation }
