const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


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
  console.log('delete from db', id);
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