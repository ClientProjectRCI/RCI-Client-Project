const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



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