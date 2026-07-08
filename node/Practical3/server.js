const express = require('express');

const app = express();

const PORT = 3000;

const exchangeRates = {
    usd: 1300,
    eur: 1500,
    gbp: 1700
};

app.get('/convert', (req, res) => {

    const { amount, currency } = req.query;

    if (!amount || !currency) {
        return res.status(400).json({
            message: "amount and currency are required."
        });
    }

    const numericAmount = Number(amount);

    if (isNaN(numericAmount)) {
        return res.status(400).json({
            message: "Amount must be a valid number."
        });
    }

    if (!exchangeRates[currency]) {
        return res.status(400).json({
            message: "Currency must be one of: usd, eur, gbp."
        });
    }

    const convertedAmount = numericAmount * exchangeRates[currency];

    return res.status(200).json({
        input: {
            amount: numericAmount,
            currency
        },
        convertedAmount,
        unit: "RWF"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});