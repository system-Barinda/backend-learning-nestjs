
const FileService = require('../service/FileService');


const DataController = {

    async ReadData(req,res){
        try{
            const data = await FileService .GetAllData();
            res.status(200).json(data);
        }
        catch(error){
            console.error("caused by this error:",error)
            throw error;
        }
    }

};

module.exports = DataController;