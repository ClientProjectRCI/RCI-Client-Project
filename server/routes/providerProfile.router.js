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

// PUT route
router.put('/:id', (req, res) => {
  const queryText = `UPDATE "provider" SET "name" = $1, 
  "bio" = $2, WHERE "user_id" = $3;`;
  console.log('req.body is:', req.body);
  pool.
  query(queryText[req.body.name, req.body.bio, 
  req.body.phone, req.body.user_id])
  .then((result)=>{
    console.log('PUT works!!', result);
    res.sendStatus(201)
    })
.catch((error)=>{
    console.log('PUT is not working FAIL!!!!!!!', error);
  })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
