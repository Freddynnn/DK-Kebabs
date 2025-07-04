const express = require('express');
const cors = require('cors');
const menuRoutes = require('./routes/menu');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/menu', menuRoutes);

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
