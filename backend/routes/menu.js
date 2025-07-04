const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all menu items
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM menu');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
