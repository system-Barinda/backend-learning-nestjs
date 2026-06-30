const fs = require('fs').promises
const path = require('path');
const { json } = require('zod');

const FilePath = path.join(__dirname,"../../data.json");

const FileService = {

    //let us get all data we have in file called the data.json{}
     async GetAllData(){
       try{
        const data = await fs.readFile(FilePath,JSON,"utf8");
        return JSON.parse(data);
       }
       catch(err){
        if(err){
            console.error('failed to fetch data',err);
        }
        throw new Error(err);
       }
     },

     //let us add data to the curruntly date we have

     async WriteDataFile(item){
         try{
            
          await fs.writeFile(FilePath,JSON.stringify(item,null,2),"utf8");

         }
         catch(error){
            console.error(error)
         }
     }
};

module.exports = FileService;