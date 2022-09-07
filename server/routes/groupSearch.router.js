const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware'); 

/**
 * GET route
 */

router.get('/:className/:searchItem', (req, res) => {

    const column = req.params.className;
    const searchItem = req.params.searchItem;
  console.log(
    'here is the searchItem in the groupSearch router',
    searchItem
  );
  console.log('here is the column in the groupSearch router', column);
  const queryText = `SELECT * FROM "group" WHERE ${column} ILIKE '%${searchItem}%' ORDER BY "group"."name" ASC;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get the group name', err);
      res.sendStatus(500);
    });
});


module.exports = router;