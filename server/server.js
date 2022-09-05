const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const multer  = require('multer');

const fileStorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, '../public/Images');
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: fileStorageEngine });

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const groupsRouter = require('./routes/groups.router');
const providersRouter = require('./routes/providers.router');
const specializationsRouter = require('./routes/specializations.router');
const insurancesRouter = require('./routes/insurances.router');
const occupationsRouter = require('./routes/occupations.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

//multer
app.post('../public/Images', upload.single('uploaded_file'), function (req, res) {
    console.log(req.file, req.body)
 });

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/groups', groupsRouter);
app.use('/api/providers', providersRouter);
app.use('/api/specializations', specializationsRouter);
app.use('/api/insurances', insurancesRouter);
app.use('/api/occupations', occupationsRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
