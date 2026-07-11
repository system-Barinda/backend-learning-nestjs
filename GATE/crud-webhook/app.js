const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

const FILE = "./data.json";

// Read data
function readData() {
    if (!fs.existsSync(FILE)) {
        fs.writeFileSync(FILE, "[]");
    }

    return JSON.parse(fs.readFileSync(FILE));
}

// Save data
function saveData(data) {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

// ---------------- WEBHOOK ----------------

function webhook(event, data) {
    console.log("====================");
    console.log("Webhook Triggered");
    console.log("Event:", event);
    console.log("Data:", data);
    console.log("====================");
}

// ---------------- CREATE ----------------

app.post("/users", (req, res) => {

    const users = readData();

    const user = {
        id: Date.now(),
        name: req.body.name,
        age: req.body.age
    };

    users.push(user);

    saveData(users);

    webhook("USER_CREATED", user);

    res.status(201).json(user);
});

// ---------------- READ ----------------

app.get("/users", (req, res) => {

    const users = readData();

    res.json(users);

});

// ---------------- READ ONE ----------------

app.get("/users/:id", (req, res) => {

    const users = readData();

    const user = users.find(u => u.id == req.params.id);

    if (!user)
        return res.status(404).json({ message: "User not found" });

    res.json(user);

});

// ---------------- UPDATE ----------------

app.put("/users/:id", (req, res) => {

    const users = readData();

    const index = users.findIndex(u => u.id == req.params.id);

    if (index === -1)
        return res.status(404).json({ message: "User not found" });

    users[index].name = req.body.name;
    users[index].age = req.body.age;

    saveData(users);

    webhook("USER_UPDATED", users[index]);

    res.json(users[index]);

});

// ---------------- DELETE ----------------

app.delete("/users/:id", (req, res) => {

    const users = readData();

    const index = users.findIndex(u => u.id == req.params.id);

    if (index === -1)
        return res.status(404).json({ message: "User not found" });

    const deleted = users.splice(index, 1);

    saveData(users);

    webhook("USER_DELETED", deleted[0]);

    res.json({
        message: "Deleted successfully"
    });

});dsalkfja;kl

// ---------------- START ----------------

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});