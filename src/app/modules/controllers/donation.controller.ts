//* =======================================>
//! DONATION  AREA ========================>
//* =======================================>

import { RequestHandler } from "express";
import { DonationServices } from "../services/donation.services";


const createDonation: RequestHandler = async (req, res) => {
    const donation = req.body;
    console.log(donation, " donation")

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

const getAllDonation: RequestHandler = async (req, res) => {
    try {
        const data = await DonationServices.getAllDonation()
        res.status(200).json({
            data,
            success: true,
        })
    } catch (error) {
        res.status(400).json({
            error: "No Data Found"
        })
    }
}


const getDonationByCampaign: RequestHandler = async (req, res) => {
    const campaignId = req.params.id
    // console.log(campaignId)
    try {
        const data = await DonationServices.getDonationByCampaign(campaignId)
        console.log(data)
        res.status(200).json(({
            data
        }))

    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
}
const getDonationByUser: RequestHandler = async (req, res) => {
    const donatorId = req.body.donatorId
    console.log(donatorId)
    try {
        const data = await DonationServices.getDonationByUser(donatorId)
        console.log(data)
        res.status(200).json(({
            data
        }))

    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
}

export const DonationController = { createDonation, getAllDonation, getDonationByCampaign, getDonationByUser }
