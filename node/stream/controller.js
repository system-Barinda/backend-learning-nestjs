import fileService from "./fileService.js";

const controller = {
  getData(req, res) {
    try {
      const stream = fileService.readFile();

      res.setHeader("Content-Type", "application/json");
      stream.pipe(res);
    } catch (error) {
      res.status(500).json({
        message: "Error retrieving data",
        error: error.message,
      });
    }
  },
};

export default controller;