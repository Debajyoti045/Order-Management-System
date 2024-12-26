const express = require('express');
const router = express.Router();

const orders = [];

const calculateDiscount = (quantity, price) => {
    let totalAmount = quantity * price;
    let discount = 0;

    if (totalAmount > 10000) {
        discount += totalAmount * 0.1;
    }
    if (quantity > 5) {
        discount += 500;
    }

    return { discountedAmount: totalAmount - discount, discount };
};
  
// place an order
router.post('/', (req, res) => {
    const { productName, quantity, pricePerUnit } = req.body;

    // Validation
    if (!productName || quantity <= 0 || pricePerUnit <= 0) {
        return res.status(400).json({ error: 'Invalid input. Ensure all fields are provided and values are positive.' });
    }

    const orderId = orders.length + 1;
    const timestamp = new Date();
    const { discountedAmount, discount } = calculateDiscount(quantity, pricePerUnit);

    const order = {
        id: orderId,
        productName,
        quantity,
        pricePerUnit,
        totalAmount: discountedAmount,
        discount,
        timestamp,
    };

    orders.push(order);
    res.status(201).json(order);
});

// Get Order Summary
router.get('/:id', (req, res) => {
    const orderId = parseInt(req.params.id);

    const order = orders.find((order) => order.id === orderId);

    if (!order) {
        return res.status(404).json({ error: 'Order not found.' });
    }

    res.json(order);
});

module.exports = {
    router,
    orders
}
