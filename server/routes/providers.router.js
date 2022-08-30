const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  const query = `SELECT * FROM "MHP" ORDER BY "name" ASC`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all Providers', err);
      res.sendStatus(500);
    });
});



module.exports = router;