const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware'); 



// //filter by occupations
router.get('/:occupation', (req, res) => {
  const occupation = req.params.occupation;


  console.log('here is the occupation in the providerSearch router', occupation);
  const queryText = `SELECT provider.id, occupations.occupation, provider."name", provider.bio, provider.picture, provider.phone, provider.email FROM "provider" 
  JOIN "provider_occupation" 
  ON "provider"."id" = "provider_occupation"."provider_id"
  JOIN "occupations"
  ON "occupations"."id" = "provider_occupation"."occupation_id"
  WHERE "occupations"."occupation" ILIKE '%${occupation}%' 
  ORDER BY "provider"."name";`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get the providers by occupation', err);
      res.sendStatus(500);
    });
});


module.exports = router;