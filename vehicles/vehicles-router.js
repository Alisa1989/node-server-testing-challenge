const express = require("express")
const Vehicles = require("./vehicles-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await Vehicles.find())
	} catch(err) {
		next(err)
	}
})

router.post("/", async (req,res,next) => {
	try {
		const vehicle = await Vehicles.create(req.body)
		res.status(201).json(vehicle)
	} catch(err){
		next(err)
	}
})

router.delete("/:id", async (req,res,next) => {
	try{
		const { id } = req.params
		await Vehicles.remove(id)
		res.status(200).json({ message:"Vehicle deleted successfully."})
	} catch (err){
		next(err)
	}
})

module.exports = router
