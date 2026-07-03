const express = require('express');
const router = express.Router();
const DataModel = require('../models/data');

router.get('/', async (req, res) => {
  const data = await DataModel.find();
  res.send(data);
});

router.post('/', async (req, res) => {
  const { type, value } = req.body;
  const data = new DataModel({ type, value });
  await data.save();
  res.send('Data created successfully');
});

module.exports = router;