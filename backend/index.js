const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/menu', (req, res) => {
    res.json([{ id: 1, name: "Chicken Kebab", price: 12 }]);
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));


// JUST BASIC EXAMPLE FILE
