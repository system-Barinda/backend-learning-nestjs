const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname,'../../data.json');

const fileService = {
    async readItem() {
        try{
            const data = await fs.readFile(filePath,'utf8');
            return JSON.parse(data);
        }
        catch(error){
            if(error.code === 'ENOENT'){
                await fs.writeFile(filePath,JSON.stringify([]),'utf8')
                return [];
            }
            throw new Error(error);
        }
    },


    async writeItem(item){
        await fs.writeItem(filePath,JSON.stringify(item,null,2),'utfb')
    }
}

module.exports = fileService;