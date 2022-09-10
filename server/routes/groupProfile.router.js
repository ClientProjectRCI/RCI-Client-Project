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

// PUT route
router.put('/:id', (req, res) => {
  const queryText = `UPDATE group SET name = $1, 
  bio = $2, website = $3, 
  email = $4, phone = $5, 
  street = $6, city = $7, 
  state = $8, zipcode = $9 WHERE user_id = $10;`;
  pool.
  query(queryText[req.body.name, req.body.bio, 
    req.body.website, req.body.email, req.body.phone, 
    req.body.street, req.body.city, req.body.state, 
    req.body.zipcode, req.params.user_id])
  .then((result)=>{
    console.log('PUT works!!', result);
    res.sendStatus(201)
    })
.catch((error)=>{
    console.log('PUT is not working FAIL!', error);
  })
})


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
