const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



//get route for availability
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
   const providerId = req.params.id;
   console.log('here is the providerId in the occupations router', providerId);
  const query = `SELECT "occupations"."occupation" FROM "occupations"
JOIN "provider_occupation"
ON "provider_occupation"."occupation_id" = "occupations"."id"
WHERE "provider_occupation"."provider_id" = $1;`; 
  pool
    .query(query, [providerId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get the occupations', err);
      res.sendStatus(500);
    });
});

module.exports = router;