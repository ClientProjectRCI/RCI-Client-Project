const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// //get route for insurances
// router.get('/', (req, res) => {
//   const query = `SELECT * FROM "insurance_plan" ORDER BY "id";`;
//   pool
//     .query(query)
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((err) => {
//       console.log('ERROR: Get all insurances', err);
//       res.sendStatus(500);
//     });
// });

//GET 1 PROFILE's list of INSURANCES
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  console.log('here is the userId in the profileInsurance router', userId);
  const query = `SELECT insurance_plan.insurance FROM insurance_plan
  JOIN provider_insurance_plan
  ON provider_insurance_plan.insurance_plan_id = insurance_plan.id
  JOIN provider
  ON provider.id = provider_insurance_plan.provider_id
  WHERE provider.user_id = $1;
`;
  pool
    .query(query, [userId])
    .then((result) => {
      console.log(`What is result.rows`, result.rows)
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get the insurances', err);
      res.sendStatus(500);
    });
});

module.exports = router;
