const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'GET' });
})
router.post('/', (req, res) => {
  res.status(201)
  res.json({ message: 'POST' });
});
router.delete('/', (req, res) => {
  res.json({ message: 'DELETE'});
});

module.exports = router