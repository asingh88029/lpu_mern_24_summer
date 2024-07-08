const httpStatus = require("http-status");

const {SaveDataInAdventures} = require("./../service/Adventures.service")

async function AddNewAdventureController(req, res){
    try{

        // We have to extract the information from the body

        const {cityId, name, costPerHead, duration, category, image, currency} = req.body;

        const result = await SaveDataInAdventures(cityId, name, costPerHead, duration, image, currency, category);

        if(result.success){
            res.status(httpStatus.CREATED).json({
                success : true,
                data : result.data
            })
        }else{
            throw new Error("Error in AddNewAdventureController")
        }


    }catch(err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success : false
        })
    }
}

module.exports = {
    AddNewAdventureController
}