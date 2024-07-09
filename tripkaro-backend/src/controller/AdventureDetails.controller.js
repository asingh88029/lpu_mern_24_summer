const httpStatus = require("http-status")

const { SaveNewAdventureDetailService } = require("./../service/AdventureDetail.service")

async function SaveNewAdventureDetail(req, res){

    try{

        const { id : adventureId } = req.query

        const { subtitle, images, content, slots} = req.body

        const result = await SaveNewAdventureDetailService(adventureId, subtitle, images, content, slots)

        if(result.success){

            res.status(httpStatus.CREATED).json({
                success : true,
                data : result.data
            })

        }else{
            throw new Error("Error in SaveNewAdventureDetail Controler")
        }

    }catch(err){
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success : false
        })
    }

}

module.exports = {
    SaveNewAdventureDetail
}