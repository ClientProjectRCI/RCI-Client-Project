const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware'); 


// POST route for services provider registration
router.post('/', rejectUnauthenticated, (req, res) => {
  const newProvider = req.body;

  console.log("service content is:", req.body);
  
  let queryText = `INSERT INTO "provider_service_type" (
  "provider_id", "service_type_id"
  )
  VALUES ($1, $2)`;
  pool.query(queryText, 
      [newProvider.provider_id,
      newProvider.service_type_id
      ])
.then(result => {
  res.sendStatus(201);
  })
.catch(error => {
  console.log(`Error adding req.body`, error);
  res.sendStatus(500);
  });
});


//get route for services
router.get('/', (req, res) => {
  const query = `SELECT * FROM "service_type" ORDER BY "id";`; 
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all services', err);
      res.sendStatus(500);
    });
});


//get route for services
router.get('/:id', (req, res) => {
   const providerId = req.params.id;
   console.log('here is the providerId in the services router', providerId);
  const query = `SELECT service_type.service FROM service_type
JOIN provider_service_type 
ON provider_service_type.service_type_id = service_type.id
WHERE provider_service_type.provider_id = $1;
`; 
  pool
    .query(query, [providerId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get the services', err);
      res.sendStatus(500);
    });
});

module.exports = router;