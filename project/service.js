const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json");

function readItems(callback) {

    let data = "";

    const stream = fs.createReadStream(filePath, "utf8");

    stream.on("data", (chunk) => {
        data += chunk;
    });

    stream.on("end", () => {
        callback(JSON.parse(data));
    });

    stream.on("error", (err) => {
        console.log(err);
    });

}


function createItem(item) {

    readItems((items) => {

        items.push(item);

        const stream = fs.createWriteStream(filePath);

        stream.write(JSON.stringify(items, null, 2));

        stream.end();

    });

}