const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET 1 PROFILE's list of OCCUPATIONS
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    console.log('userId', userId);
    const query = `
    SELECT occupations.occupation FROM occupations
    JOIN provider_occupation ON provider_occupation.occupation_id = occupations.id
    JOIN provider ON provider.id = provider_occupation.provider_id
    WHERE provider.user_id = $1;
  `;
    pool.query(query, [userId])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('ERROR: Get the insurances', err);
            res.sendStatus(500);
        });
});

module.exports = router;
