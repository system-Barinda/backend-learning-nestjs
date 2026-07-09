const fs = require("fs");
const { Transform } = require("stream");


const readStream = fs.createReadStream("input.txt", {
    encoding: "utf8",
});


const writeStream = fs.createWriteStream("output.txt");


const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    },
});


readStream.on("error", (err) => {
    console.error("Error reading file:", err.message);
});


writeStream.on("error", (err) => {
    console.error("Error writing file:", err.message);
});


upperCaseTransform.on("error", (err) => {
    console.error("Transform error:", err.message);
});


writeStream.on("finish", () => {
    console.log("File has been successfully converted to uppercase.");
});


readStream.pipe(upperCaseTransform).pipe(writeStream);