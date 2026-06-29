const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../../data.json');

const fileService = {
    // 1. Changed from 'readItem' to 'readItems' to match your controller
    async readItems() {
        try {
            const data = await fs.readFile(filePath, 'utf8');
            return JSON.parse(data);
        }
        catch (error) {
            if (error.code === 'ENOENT') {
                await fs.writeFile(filePath, JSON.stringify([]), 'utf8');
                return [];
            }
            throw error; // Throwing the original error is cleaner
        }
    },

    // 2. Changed to 'writeItems' to match the controller, and fixed the internal bugs
    async writeItems(items) {
        // Fixed: Changed 'fs.writeItem' to the correct native method 'fs.writeFile'
        // Fixed: Corrected the typo 'utfb' to 'utf8'
        await fs.writeFile(filePath, JSON.stringify(items, null, 2), 'utf8');
    }
}

module.exports = fileService;