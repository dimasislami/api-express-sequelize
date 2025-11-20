require('dotenv').config();
const express = require('express');

const app = express();

// Middleware global
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('API Node.js dengan Prisma berjalan 🚀'));

module.exports = app;

