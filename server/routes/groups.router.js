const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.get('/', (req, res) => {
  const query = `SELECT * FROM "group" ORDER BY "name" ASC`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all Groups', err);
      res.sendStatus(500);
    });
});


/**
 * GET route
 */

router.get('/:id', (req, res) => {
  const groupId = req.params.id;
  console.log('here is the groupId in the group router', groupId);
  const queryText = `SELECT * FROM "group" WHERE "id" = $1 ORDER BY "id" ASC;`;
  pool
    .query(queryText, [groupId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get the group id', err);
      res.sendStatus(500);
    });
});


// Delete route for group
router.delete("/:id", (req, res)=>{
  const id = req.params.id;
  console.log('delete route from db>>>>', id);
  let sqlQuery = `
  DELETE FROM "group"
  WHERE "id" = $1;
  `;
  const sqlParams=[id];
  pool
  .query(sqlQuery, sqlParams)
  .then((res)=>{
      res.sendStatus(200);
  })
  .catch((error)=>{
      console.log('error in group router DELETE', error);
      res.sendStatus(500);
  });
  })


module.exports = router;