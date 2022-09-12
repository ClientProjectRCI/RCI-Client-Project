const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// //filter by insurance
router.get('/:insurance', (req, res) => {
    const insurance = req.params.insurance;

    console.log(
        'here is the insurance in the providerSearch router',
        insurance
    );
    const queryText = `SELECT provider.id, provider."name", provider.bio, provider.picture, provider.phone, provider.email FROM "provider" 
  JOIN "provider_insurance_plan" 
  ON "provider"."id" = "provider_insurance_plan"."provider_id"
  JOIN "insurance_plan"
  ON "insurance_plan"."id" = "provider_insurance_plan"."insurance_plan_id"
  WHERE "insurance_plan"."insurance" ILIKE '%${insurance}%' 
  ORDER BY "provider"."name";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('ERROR: Get the providers by insurance', err);
            res.sendStatus(500);
        });
});

module.exports = router;
