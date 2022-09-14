const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET a single PROVIDER'S Details, by the USER.ID

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  console.log('here is the userId in the providerProfile router', userId);
  const queryText = `
      SELECT "provider"."id", "user_id", "name", "bio", "picture", "phone", "email", "availability", "access_level" FROM "provider" 
  JOIN "user" ON "provider"."user_id" = "user"."id" WHERE "user_id" = $1;`;
  pool
    .query(queryText, [userId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get the provider id', err);
      res.sendStatus(500);
    });
});

// PUT route
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const editProvider = req.body;
  const queryText = `UPDATE "provider" SET ("name", "bio", "phone", "email", "availability") 
   =  ($1, $2, $3, $4, $5) WHERE "id" = $6;`;
  console.log('req.body is:', req.body);
  console.log('req.params is:', req.params);
  pool
    .query(queryText, [
      editProvider.name,
      editProvider.bio,
      editProvider.phone,
      editProvider.email,
      editProvider.availability,
      id
    ])
    .then((result) => {
      //         Second query that updates a Specialization for that provider

      const updateProviderSpecializationsQuery = `
      UPDATE "provider_specializations" SET  "specializations_id"
      = $1 WHERE "provider_id" = $2;
      `;

      pool
        .query(updateProviderSpecializationsQuery, [
          editProvider.specializations_id,
          id,
        ])
        .then((result) => {
          console.log('Result.rows[0] in specializations:', result.rows[0]);
          // Third query that edits a Occupation for that provider
          const updateProviderOccupationsQuery = `
      UPDATE "provider_occupation" SET "occupation_id"
       = $1 WHERE "provider_id" = $2;
      `;

          pool
            .query(updateProviderOccupationsQuery, [
              editProvider.occupation_id,
              id,
            ])
            .then((result) => {
              // fourth query that edits a Insurance for that provider
              console.log('Result.rows[0] in occupations:', result.rows[0]);
              const updateProviderInsurancesQuery = `
      UPDATE "provider_insurance_plan" SET "insurance_plan_id"
      = $1 WHERE "provider_id" = $2;
      `;
              pool
                .query(updateProviderInsurancesQuery, [
                  editProvider.insurance_plan_id,
                  id,
                ])
                .then((result) => {
                  // fifth query that adds a serviceType for that new provider
                  console.log('Result.rows[0] in insurances:', result.rows[0]);
                  const updateProviderServicesQuery = `
      UPDATE "provider_service_type" SET "service_type_id"
      = $1 WHERE "provider_id" = $2 RETURNING "provider_id";
      `;
                  pool.query(updateProviderServicesQuery, [
                    // editProvider.service_type_id,
                    2,
                    id,
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
