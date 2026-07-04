const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;
const FILE = "./data.json";

app.use(express.json());

// Create data.json if it doesn't exist
if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, JSON.stringify([]));
}

// Read data
function readData() {
    const data = fs.readFileSync(FILE, "utf8");
    return JSON.parse(data);
}

// Write data
function writeData(data) {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

// =======================
// GET - Get all items
// =======================
app.get("/items", (req, res) => {
    const items = readData();

    res.status(200).json({
        success: true,
        data: items
    });
});

// =======================
// POST - Create item
// =======================
app.post("/items", (req, res) => {
    const items = readData();

    const newItem = {
        id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
        name: req.body.name,
        price: req.body.price
    };

    items.push(newItem);

    writeData(items);

    res.status(201).json({
        message: "Item created successfully",
        data: newItem
    });
});

// =======================
// PUT - Update item
// =======================
app.put("/items/:id", (req, res) => {
    const items = readData();

    const id = Number(req.params.id);

    const item = items.find(item => item.id === id);

    if (!item) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    item.name = req.body.name;
    item.price = req.body.price;

    writeData(items);

    res.status(200).json({
        message: "Item updated successfully",
        data: item
    });
});

// =======================
// DELETE - Delete item
// =======================
app.delete("/items/:id", (req, res) => {
    const items = readData();

    const id = Number(req.params.id);

    const item = items.find(item => item.id === id);

    if (!item) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    const updatedItems = items.filter(item => item.id !== id);

    writeData(updatedItems);

    res.status(200).json({
        message: "Item deleted successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
