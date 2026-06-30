
const FileService = require('../service/FileService');


const DataController = {

    async ReadData(req,res){
        try{
            const data = await FileService .GetAllData();
            res.status(200).json(data);
        }
        catch(error){
            throw new Error({statusCode:409,message:error})
        }
    }

};

module.exports = DataController;