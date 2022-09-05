const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// POST route for initial provider registration
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log("content is:", req.body);
  let queryText = `INSERT INTO "provider" (
  "user_id", "name", "bio", "picture", 
  "phone", "email", "insurance_id", 
  "occupation_id", "specialization_id",
  "service_id", "availability", 
  "group_id"
  )
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
  pool.query(queryText, 
      [req.body.user_id,
      req.body.providerName,
      req.body.providerBio, 
      req.body.providerPicture,
      req.body.providerPhone,
      req.body.providerEmail,
      req.body.providerInsurance, 
      req.body.providerOccupation, 
      req.body.providerSpecialization,
      req.body.providerService, 
      req.body.providerAvailability,
      req.body.groupId
      ])
.then(result => {
  res.sendStatus(201);
  })
.catch(error => {
  console.log(`Error adding req.body`, error);
  res.sendStatus(500);
  });
});


router.get('/', (req, res) => {
  const query = `SELECT * FROM "provider" ORDER BY "name" ASC`;
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


/**
 * GET route
 */

router.get('/:id', (req, res) => {
  const providerId = req.params.id;
  console.log('here is the providerId in the provider router', providerId);
  const queryText = `SELECT * FROM "provider" WHERE "id" = $1 ORDER BY "id" ASC;`;
  pool
    .query(queryText, [providerId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get the provider id', err);
      res.sendStatus(500);
    });
});


module.exports = router;