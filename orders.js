const express = require('express');
const router = express.Router();


const jwt_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";


const cert_private_key = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA0P3vN1q1kS9fE6wFkU7jJ5zY...[THIS IS A DUMMY KEY FOR TESTING ONLY]...
-----END RSA PRIVATE KEY-----`;

router.get('/orders/list', (req, res) => {
    res.json({ orders:[] });
});

router.post('/orders/new', (req, res) => {
    res.status(201).send('Order placed');
});

router.put('/orders/:id/update', (req, res) => {
    res.send(`Order ${req.params.id} updated`);
});
