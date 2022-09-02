const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



//get route for occupations
router.get('/', (req, res) => {
  const query = `SELECT * FROM "occupations" ORDER BY "id";`; 
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all occupations', err);
      res.sendStatus(500);
    });
});


//get route for occupations
router.get('/:id', (req, res) => {
  const query = `SELECT * FROM "occupations"  WHERE "id" = $1 ORDER BY "id" ASC;`; 
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get the occupations', err);
      res.sendStatus(500);
    });
});

module.exports = router;