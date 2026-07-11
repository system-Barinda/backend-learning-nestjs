const axios = require("axios");

async function webhook(event, data) {
    try {
        await axios.post("http://localhost:4000/webhook", {
            event,
            data
        });

        console.log("Webhook sent successfully");
    } catch (error) {
        console.log("Webhook failed");
    }
}