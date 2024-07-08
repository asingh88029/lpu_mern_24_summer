const Adventures = require("./../model/Adventures.model")

async function SaveDataInAdventures(cityId, name, costPerHead, duration, image, currency, category){

    try{

        const result = await Adventures.create({
            cityId,
            name,
            costPerHead,
            currency,
            image,
            duration,
            category
        })

        if(result) {
            return {
                success : true,
                data : result
            }
        }else{
            throw new Error("Error in SaveDataInAdventures")
        }

    }catch(err){
        console.log(err)
        return {
            success : false
        }
    }

}

module.exports = {
    SaveDataInAdventures
}