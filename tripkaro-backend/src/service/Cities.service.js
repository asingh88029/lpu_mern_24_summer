const Cities = require("./../model/Cities.model");

async function SaveNewDataInCities(id, city, description, image){
    try{

        const result = await Cities.create({
            id,
            city,
            description,
            image
        })

        console.log(result)

        if(result){
            return {
                success : true,
                data : result
            }
        }else{
            throw new Error("Error while saving data in cities")
        }

    }catch(err){
        console.log(err)
        return {
            success : false
        }
    }
}

module.exports = {
    SaveNewDataInCities
}