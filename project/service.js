const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json");

function readItems() {
    return new Promise((resolve, reject) => {

        let data = "";

        const stream = fs.createReadStream(filePath, "utf8");

        stream.on("data", chunk => data += chunk);

        stream.on("end", () => {
            try {
                resolve(JSON.parse(data || "[]"));
            } catch (err) {
                reject(err);
            }
        });

        stream.on("error", reject);

    });
}

function writeItems(items) {
    return new Promise((resolve, reject) => {

        const stream = fs.createWriteStream(filePath);

        stream.write(JSON.stringify(items, null, 2));

        stream.end();

        stream.on("finish", resolve);

        stream.on("error", reject);

    });
}