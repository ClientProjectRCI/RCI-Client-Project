const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware'); 

// POST route for insurance provider registration
router.post('/', rejectUnauthenticated, (req, res) => {
  const newProvider = req.body;

  console.log("insurance content is:", req.body);
  
  let queryText = `INSERT INTO "provider_insurance_plan" (
  "provider_id", "insurance_plan_id"
  )
  VALUES ($1, $2)`;
  pool.query(queryText, 
      [newProvider.user_id,
      newProvider.insurance_id
      ])
.then(result => {
  res.sendStatus(201);
  })
.catch(error => {
  console.log(`Error adding req.body`, error);
  res.sendStatus(500);
  });
});


//get route for insurances
router.get('/', (req, res) => {
  const query = `SELECT * FROM "insurance_plan" ORDER BY "id";`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all insurances', err);
      res.sendStatus(500);
    });
});

//get route for insurances
router.get('/:id', (req, res) => {
  const providerId = req.params.id;
  console.log('here is the providerId in the insurance router', providerId);
  const query = `SELECT insurance_plan.insurance FROM insurance_plan
JOIN provider_insurance_plan
ON provider_insurance_plan.insurance_plan_id = insurance_plan.id
WHERE provider_insurance_plan.provider_id = $1;
`;
  pool
    .query(query, [providerId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get the insurances', err);
      res.sendStatus(500);
    });
});

module.exports = router;
