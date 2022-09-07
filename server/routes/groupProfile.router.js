const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



// GET a single GROUP'S Details, by the USER.ID

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  console.log('here is the userId in the groupProfile router', userId);
  const queryText = `SELECT * FROM "group" 
  JOIN "user" ON "group"."user_id" = "user"."id" WHERE "user"."id" = $1;`;
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
