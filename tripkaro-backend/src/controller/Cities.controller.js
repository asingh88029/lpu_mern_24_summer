const {SaveNewDataInCities} = require("./../service/Cities.service")

async function CreateNewCity(req, res){

    try{

        const {city, description, image} = req.body;
        const id = city.toLowerCase()
        const result = await SaveNewDataInCities(id, city, description, image)

        if(result.success){
            res.status(201).json({
                success : true,
                data : result.data
            })
        }else{
            throw new Error("Error while calling CreateNewCity Controller")
        }

    }catch(err){
        res.status(500).json({
            success : false
        })
    }

}

module.exports = {
    CreateNewCity
}