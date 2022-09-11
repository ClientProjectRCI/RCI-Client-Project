const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware'); 

// POST route for occupation provider registration
router.post('/', rejectUnauthenticated, (req, res) => {
  const newProvider = req.body;

  console.log("occupation content is:", req.body);
  
  let queryText = `INSERT INTO "provider_occupation" (
  "provider_id", "occupation_id"
  )
  VALUES ($1, $2)`;
  pool.query(queryText, 
      [newProvider.provider_id,
      newProvider.occupation_id
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