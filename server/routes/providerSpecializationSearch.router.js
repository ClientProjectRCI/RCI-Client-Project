const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

//filter by specialization
router.get('/:specialization', (req, res) => {
    const specialization = req.params.specialization;

    console.log(
        'here is the specialization in the providerSearch router',
        specialization
    );
    const queryText = `SELECT provider.id, provider."name", provider.bio, provider.picture, provider.phone, provider.email FROM "provider" 
  JOIN "provider_specializations" 
  ON "provider"."id" = "provider_specializations"."provider_id"
  JOIN "specializations"
  ON "specializations"."id" = "provider_specializations"."specializations_id"
  WHERE "specializations"."specialization" ILIKE '%${specialization}%' 
  ORDER BY "provider"."name";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('ERROR: Get the providers by specialization', err);
            res.sendStatus(500);
        });
});

module.exports = router;
