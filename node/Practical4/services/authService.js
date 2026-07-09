const fs = require("fs").promises;

const FILE = "./auth.json";

async function readUsers() {
    const data = await fs.readFile(FILE, "utf8");
    return JSON.parse(data);
}

async function saveUsers(users) {
    await fs.writeFile(
        FILE,
        JSON.stringify(users, null, 2)
    );
}

async function signup(username, password) {
    const users = await readUsers();

    const userExists = users.find(
        user => user.username === username
    );

    if (userExists) {
        return {
            success: false,
            message: "Username already exists"
        };
    }

    users.push({
        username,
        password
    });

    await saveUsers(users);

    return {
        success: true,
        message: "User registered successfully"
    };
}

async function login(username, password) {
    const users = await readUsers();

    const user = users.find(
        user =>
            user.username === username &&
            user.password === password
    );

    if (!user) {
        return {
            success: false,
            message: "Wrong credentials!"
        };
    }

    return {
        success: true,
        message: "You are logged in!"
    };
}

module.exports = {
    signup,
    login
};