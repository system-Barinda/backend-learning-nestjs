const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {


    if (req.method === "GET" && req.url === "/") {

        fs.readFile("barinda.txt", "utf8", (err, data) => {

            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Error reading file");
            }

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);

        });

    }

  
    else if (req.method === "POST" && req.url === "/add") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {

            fs.writeFile("barinda.txt", body, (err) => {

                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    return res.end("Error writing to file");
                }

                res.writeHead(201, { "Content-Type": "text/plain" });
                res.end("Data received and written to file");

            });

        });

    }

    // else if (req.method === "GET" && req.url === "/delete"){
    //     fs.unlink("output.txt",(err) => {
    //         if(err){
    //             res.writeHead(500, {"Content-Type":"text/plain"})
    //             res.end("error deleting file: " + err.message)
    //         } else {
    //             res.writeHead(200, {"Content-Type":"text/plain"})
    //             res.end("file deleted successfully")
    //         }
    //     });
    // }

    else if (req.method === "DELETE" && req.url === "/delete"){
        fs.writeFile("barinda.txt"," ", (err) => {
            if(err){
                res.writeHead(500, {"Content-Type":"text/plain"})
                res.end("error deleting data:" + err.message)
            }
        
            return res.end("data deleted successfully");
        })
    }
else if (req.method === "PUT" && req.url === "/update") {

    let body = "";

    req.on("data", (chunk) => {
        body += chunk.toString();
    });

    req.on("end", () => {

        fs.writeFile("output.txt", body, (err) => {

            if (err) {

                res.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                return res.end("Error updating file");

            }

            res.writeHead(200, {
                "Content-Type": "text/plain"
            });

            res.end("File updated successfully");

        });

    });

}

    else {

        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Method Not Allowed");

    }

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});