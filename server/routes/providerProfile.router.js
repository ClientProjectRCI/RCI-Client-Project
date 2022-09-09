const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



// GET a single PROVIDER'S Details, by the USER.ID

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  console.log('here is the userId in the providerProfile router', userId);
  const queryText = `
  SELECT * FROM "provider" 
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
