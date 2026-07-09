const authService = require("../services/authService");

async function signup(req, res) {
    try {
        const { username, password } = req.body;

        const result = await authService.signup(
            username,
            password
        );

        if (!result.success) {
            return res.status(400).json(result);
        }

        res.status(201).json(result);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

async function login(req, res) {
    try {
        const { username, password } = req.body;

        const result = await authService.login(
            username,
            password
        );

        if (!result.success) {
            return res.status(401).json(result);
        }

        res.json(result);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    signup,
    login
};