const fs = require('fs/promises');
const path = require('path');

const targetfile = path.join(__dirname,"system.txt");

async function appendTimestampToFile(filePath){
       const timeStamp =`\n[timestamp]: ${new Date().toISOString()}`;

       try{
            await fs.appendFile(filePath,timeStamp,'utf8');
            console.log(`Successfully updated ${filePath}`);
       }
       catch(error){
        console.error(`Error writing to file: ${error.message}`);
       }
}

appendTimestampToFile(targetfile);