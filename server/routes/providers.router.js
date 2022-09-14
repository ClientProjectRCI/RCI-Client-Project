const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// POST route for initial provider registration
router.post('/', rejectUnauthenticated, (req, res) => {
  const newProvider = req.body;

  const path = `/images/${newProvider.picture}`;

  console.log('provider content is:', req.body);

  let queryText = `INSERT INTO "provider" (
  "user_id", "name", "bio", "picture", 
  "phone", "email", "availability" 
  )
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING "id";`;
  pool
    .query(queryText, [
      newProvider.user_id,
      newProvider.name,
      newProvider.bio,
      path,
      newProvider.phone,
      newProvider.email,
      newProvider.availability
      // newProvider.group_id,
    ])
    .then((result) => {
      //         Second query that adds a Specialization for that new provider
      console.log('New provider id:', result.rows[0].id); //ID IS HERE!
      const createdProviderId = result.rows[0].id;
      const insertProviderSpecializationsQuery = `
      INSERT INTO "provider_specializations" ("provider_id", "specializations_id")
      VALUES  ($1, $2);
      `;

      pool
        .query(insertProviderSpecializationsQuery, [
          createdProviderId,
          newProvider.specializations_id,
        ])
        .then((result) => {
          console.log('Result.rows[0] in specializations:', result.rows[0]);
          // Third query that adds a Occupation for that new provider
          const insertProviderOccupationsQuery = `
      INSERT INTO "provider_occupation" ("provider_id", "occupation_id")
      VALUES  ($1, $2);
      `;

          pool
            .query(insertProviderOccupationsQuery, [
              createdProviderId,
              newProvider.occupation_id,
            ])
            .then((result) => {
              // fourth query that adds a Insurance for that new provider
              console.log('Result.rows[0] in occupations:', result.rows[0]);
              const insertProviderInsurancesQuery = `
      INSERT INTO "provider_insurance_plan" ("provider_id", "insurance_plan_id")
      VALUES  ($1, $2);
      `;
              pool
                .query(insertProviderInsurancesQuery, [
                  createdProviderId,
                  newProvider.insurance_plan_id,
                ])
                .then((result) => {
                  // fifth query that adds a serviceType for that new provider
                  console.log('Result.rows[0] in insurances:', result.rows[0]);
                  const insertProviderServicesQuery = `
      INSERT INTO "provider_service_type" ("provider_id", "service_type_id")
      VALUES  ($1, $2);
      `;
                  pool.query(insertProviderServicesQuery, [
                    createdProviderId,
                    newProvider.service_type_id,
                  ]);
                })
                .catch((err) => {
                  // catch for fifth query
                  console.log('Error in ServicesQuery', err);
                  res.sendStatus(500);
                });
            })
            .catch((err) => {
              // catch for fourth query
              console.log('Error in InsuranceQuery', err);
              res.sendStatus(500);
            });
        })
        .catch((err) => {
          // catch for third query
          console.log('Error in OccupationQuery', err);
          res.sendStatus(500);
        });
      res.sendStatus(201);
    })
    .catch((error) => {
      // catch for second query
      console.log(`Error in SpecializationQuery`, error);
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

// Delete route

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  console.log('delete route from db>>>>', id);
  let sqlQuery = `
  DELETE FROM "provider"
  WHERE "id" = $1;
  `;
  const sqlParams = [id];
  pool
    .query(sqlQuery, sqlParams)
    .then((res) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error in provider router DELETE', error);
      res.sendStatus(500);
    });
});

module.exports = router;
