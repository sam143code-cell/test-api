const express = require('express');
const router = express.Router();
jwt_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
router.get('/orders/list', (req, res) => {
    res.json({ orders: [] });
});

router.post('/orders/new', (req, res) => {
    res.status(201).send('Order placed');
});

router.put('/orders/:id/update', (req, res) => {
    res.send(`Order ${req.params.id} updated`);
});
