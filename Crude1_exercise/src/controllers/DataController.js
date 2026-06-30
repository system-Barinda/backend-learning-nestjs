
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
    },

    async CreateData(req,res){
        try{
            const newData = req.body;
            const data = await this.ReadData();
            const created = await FileService.WriteDataFile(data.push(newData));
            return res.status(201).json(created);
        }
        catch(error){
            console.error("caused by this error:",error)
            throw error;
        }
    }

};

module.exports = DataController;