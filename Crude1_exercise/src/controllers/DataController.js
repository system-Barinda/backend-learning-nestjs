const FileService = require("../service/FileService");
const DataController = {

    async ReadData(req, res) {
        try {
            const data = await FileService.GetAllData();
            return res.status(200).json(data);
        } catch (error) {
            console.error("Caused by this error:", error);
            return res.status(500).json({
                message: "Failed to fetch data",
                error: error.message,
            });
        }
    },

    async CreateData(req, res) {
        try {
            const newData = req.body;

          
            const data = await FileService.GetAllData();

          
            data.push(newData);

           
            await FileService.WriteDataFile(data);

            return res.status(201).json({
                message: "Data created successfully",
                data: newData,
            });

        } catch (error) {
            console.error("Caused by this error:", error);

            return res.status(500).json({
                message: "Failed to create data",
                error: error.message,
            });
        }
    }

};

module.exports = DataController;