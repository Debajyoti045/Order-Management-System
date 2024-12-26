const express = require('express');
const router = express.Router();
const orders = require('./order').orders;

// Calculate Total Revenue
router.get('/', (req, res) => {
    try {
        const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);
         res.json({ totalRevenue });
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
});

module.exports = router;
