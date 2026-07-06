import fileService from "./fileService";

const controller = {

    async getData(req,res){
        try{
            const data = await fileService.readFile();
            res.status(200).json({message:'Data retrieved successfully',data});
        }
        catch(error){
            res.status(500).json({message:'Error retrieving data',error});
        }
    }

}

export default controller;