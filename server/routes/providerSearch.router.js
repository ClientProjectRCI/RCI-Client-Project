const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware'); 


/**
 * GET route for name
 */

router.get('/:className/:searchItem', (req, res) => {

    const column = req.params.className;
    const searchItem = req.params.searchItem;
  console.log(
    'here is the searchItem in the providerSearch router',
    searchItem
  );
  console.log('here is the column in the providerSearch router', column);
  const queryText = `SELECT * FROM "provider" WHERE ${column} ILIKE '%${searchItem}%' ORDER BY "provider"."name" ASC;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get the provider name', err);
      res.sendStatus(500);
    });
});


module.exports = router;