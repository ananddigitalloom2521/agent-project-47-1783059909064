const express = require('express');
const router = express.Router();
const userRoutes = require('./users');
const dataRoutes = require('./data');

router.use('/users', userRoutes);
router.use('/data', dataRoutes);

module.exports = router;