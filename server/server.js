const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const multer  = require('multer');

const fileStorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images');
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: fileStorageEngine });

//multer
app.post('/api/providers/images', upload.single('image'), (req, res) => {
	res.send('File uploaded successfully. Look Here! Here It is!');
});

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const groupsRouter = require('./routes/groups.router');
const providersRouter = require('./routes/providers.router');
const providersImageRouter = require('./routes/providers.router');
const specializationsRouter = require('./routes/specializations.router');
const insurancesRouter = require('./routes/insurances.router');
const occupationsRouter = require('./routes/occupations.router');
const servicesRouter = require('./routes/services.router');
const providerProfileRouter = require('./routes/providerProfile.router');
const providerSearchRouter = require('./routes/providerSearch.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());



/* Routes */
app.use('/api/user', userRouter);
app.use('/api/groups', groupsRouter);
app.use('/api/providers', providersRouter);
app.use('/api/providers/image', providersImageRouter);
app.use('/api/specializations', specializationsRouter);
app.use('/api/insurances', insurancesRouter);
app.use('/api/occupations', occupationsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/providerProfile', providerProfileRouter); 
app.use('/api/providerSearch', providerSearchRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
