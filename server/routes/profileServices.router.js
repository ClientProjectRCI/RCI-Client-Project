const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    console.log('userId', userId);
    const query = `
    SELECT service_type.service FROM service_type
    JOIN provider_service_type ON provider_service_type.service_type_id = service_type.id
    JOIN provider ON provider.id = provider_service_type.provider_id
    WHERE provider.user_id = $1;
`;
    pool.query(query, [userId])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('ERROR: Get the services', err);
            res.sendStatus(500);
        });
});

module.exports = router;
