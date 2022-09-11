const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware'); 

// POST route for specialization provider registration
router.post('/', rejectUnauthenticated, (req, res) => {
  const newProvider = req.body;

  console.log("specialization content is:", req.body.provider_id, specializations_id);
  
  let queryText = `INSERT INTO "provider_specializations" (
  "provider_id", "specializations_id"
  )
  VALUES ($1, $2)`;
  pool.query(queryText, 
      [newProvider.provider_id,
      newProvider.specializations_id
      ])
.then(result => {
  res.sendStatus(201);
  })
.catch(error => {
  console.log(`Error adding req.body`, error);
  res.sendStatus(500);
  });
});

//get route for specializations
router.get('/', (req, res) => {
  const query = `SELECT * FROM "specializations" ORDER BY "id";`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all specializations', err);
      res.sendStatus(500);
    });
});

//get route for specializations
router.get('/:id', (req, res) => {
  const providerId = req.params.id;
  console.log(
    'here is the providerId in the specializations router',
    providerId
  );
  const query = `SELECT "specializations"."specialization" FROM "specializations"
JOIN "provider_specializations"
ON "provider_specializations"."specializations_id" = "specializations"."id"
WHERE "provider_specializations"."provider_id" = $1;
`;
  pool
    .query(query, [providerId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all specializations', err);
      res.sendStatus(500);
    });
});

module.exports = router;
