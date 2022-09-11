const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware'); 

// POST route for availability provider registration
router.post('/', rejectUnauthenticated, (req, res) => {
  const newProvider = req.body;

  console.log("availability content is:", req.body);
  
  let queryText = `INSERT INTO "provider" (
  "availability"
  )
  VALUES ($1, $2)`;
  pool.query(queryText, 
      [
      newProvider.availability
      ])
.then(result => {
  res.sendStatus(201);
  })
.catch(error => {
  console.log(`Error adding req.body`, error);
  res.sendStatus(500);
  });
});


//get route for availability
router.get('/', (req, res) => {
  const query = `SELECT * FROM "availability" ORDER BY "id";`; 
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all availability', err);
      res.sendStatus(500);
    });
});


//get route for availability
router.get('/:id', (req, res) => {
   const providerId = req.params.id;
   console.log('here is the providerId in the availability router', providerId);
  const query = `SELECT "availability"."availability" FROM "availability"
JOIN "provider_availability"
ON "provider_availability"."availability_id" = "availability"."id"
WHERE "provider_availability"."provider_id" = $1;`; 
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