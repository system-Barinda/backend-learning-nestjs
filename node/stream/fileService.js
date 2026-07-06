const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname,'data.json');

const fileService = {
    
    // let create the function to read the file

    async readFile(){
        try{
            const data = await fs.createReadStream(filePath,{encoding:true})
            return data;
        }catch(err){
            console.error('Error reading file:',err);
        }
    }

}

export default  fileService;