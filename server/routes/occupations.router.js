const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



//get route for insurances
router.get('/', (req, res) => {
  const query = `SELECT * FROM "occupations" ORDER BY "id";`; 
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all imnsurances', err);
      res.sendStatus(500);
    });
});


module.exports = router;