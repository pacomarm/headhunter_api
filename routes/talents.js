const { Router } = require('express');
const router = Router();

const Talent = require('../models/Talent');

router.get('/', async (req, res) => {
  const talents = await Talent.find().sort('-_id');
  res.json(talents);
});

router.post('/', async (req, res) => {
  const { id, name, username } = req.body;
  const newTalent = new Talent({ id, name, username });
  console.log(newTalent);
  await newTalent.save();
  res.json({ message: 'Talent Saved' });
});

module.exports = router;
