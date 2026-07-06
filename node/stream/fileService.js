import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "data.json");

const fileService = {
  readFile() {
    try {
      return fs.createReadStream(filePath, {
        encoding: "utf8",
      });
    } catch (err) {
      console.error("Error reading file:", err);
    }
  },
};

export default fileService;