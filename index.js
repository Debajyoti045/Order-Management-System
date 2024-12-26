const express = require('express');
const app = express();
const PORT = 3000;
const orderRoutes = require('./routes/order.js').router;
const revenueRoutes = require('./routes/revenue.js');

app.use(express.json());

app.use('/orders', orderRoutes);
app.use('/revenue', revenueRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
