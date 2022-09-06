const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, '../public/Images');
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: fileStorageEngine });

//multer
router.post('/image', upload.single('image'), (req, res) => {
	res.send('File uploaded successfully');
});

// POST route for initial provider registration
router.post('/', rejectUnauthenticated, (req, res) => {
  const newProvider = req.body;
	const path = `/public/Images/${newProvider.picture}`;
  console.log("content is:", req.body);
  let queryText = `INSERT INTO "provider" (
  "user_id", "name", "bio", "picture", 
  "phone", "email", "insurance_id", 
  "occupation_id", "specialization_id",
  "service_id", "availability", 
  "group_id"
  )
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
  pool.query(queryText, 
      [newProvider.user_id,
      newProvider.name,
      newProvider.bio, 
      path,
      newProvider.phone,
      newProvider.email,
      newProvider.insurance_id, 
      newProvider.occupation_id, 
      newProvider.specialization_id,
      newProvider.service_id, 
      newProvider.availability,
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


module.exports = router;