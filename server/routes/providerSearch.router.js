const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware'); 



router.get('/:specialization', (req, res) => {
  const specialization = req.params.specialization;


  console.log('here is the specialization in the providerSearch router', specialization);
  const queryText = `SELECT provider.name, array_agg(specializations.specialization) FROM provider
JOIN provider_specializations ON provider_specializations.provider_id = provider.id
JOIN specializations ON specializations.id = provider_specializations.provider_id
where specializations.specialization ilike '%${specialization}%'
group by provider.name
order by provider.name asc;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get the providers by specialization', err);
      res.sendStatus(500);
    });
});


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