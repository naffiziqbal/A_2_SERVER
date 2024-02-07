//* =======================================>
//! DONATION  AREA ========================>
//* =======================================>

import { RequestHandler } from "express";
import { DonationServices } from "../services/donation.services";


const createDonation: RequestHandler = async (req, res) => {
    const donation = req.body;
    // const id = req.params.id
    // console.log(donation)

    try {
        const data = await DonationServices.createDonation(donation)
        console.log(data, "donation")
        res.status(200).json({
            data,
            success: true,
            message: "Donation Successful"
        })
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }

}


export const DonationController = { createDonation }
