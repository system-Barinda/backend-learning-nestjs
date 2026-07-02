const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../../data.json');

const fileService = {

    async readItems() {
    try {
        const data = await fs.readFile(filePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") {
            await fs.writeFile(filePath, JSON.stringify([]), "utf8");
            return [];
        }

        if (error instanceof SyntaxError) {
            throw new Error("data.json contains invalid JSON.");
        }

        throw error;
    }
}

   
    async writeItems(items) {
    
        await fs.writeFile(filePath, JSON.stringify(items, null, 2), 'utf8');
    }
}

module.exports = fileService;