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

  console.log("provider content is:", req.body);
  
  let queryText = `INSERT INTO "provider" (
  "user_id", "name", "bio", "picture", 
  "phone", "email", "group_id"
  )
  VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  pool.query(queryText, 
      [newProvider.user_id,
      newProvider.name,
      newProvider.bio, 
      path,
      newProvider.phone,
      newProvider.email,
      newProvider.groupId
      ])
.then(result => {
  res.sendStatus(201);
  })
.catch(error => {
  console.log(`Error adding req.body`, error);
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

router.delete("/:id", (req, res)=>{
  const id = req.params.id;
  console.log('delete route from db>>>>', id);
  let sqlQuery = `
  DELETE FROM "provider"
  WHERE "id" = $1;
  `;
  const sqlParams=[id];
  pool
  .query(sqlQuery, sqlParams)
  .then((res)=>{
      res.sendStatus(200);
  })
  .catch((error)=>{
      console.log('error in provider router DELETE', error);
      res.sendStatus(500);
  });
  })

module.exports = router;