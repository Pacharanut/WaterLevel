const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const basicAuth = require('express-basic-auth')
const helmet = require("helmet");
const cors = require('cors')
const bodyParser = require('body-parser')
const Joi = require('joi')

const indexRouter = require('./routes/index');
const waterlevelRouter = require('./routes/water_level/waterlevel');
const sensorRouter = require('./routes/water_level/sensor');
const pmRouter = require('./routes/pm/pm');
const deviceRouter = require('./routes/device');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

const hoganMiddleware = require('hogan-middleware');
const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganMiddleware.__express)

//const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);//localhost:3000/
app.use('/api/water_level', waterlevelRouter);
app.use('/api/sensor', sensorRouter);

app.use('/api/pm', pmRouter);
app.use('/api/device', deviceRouter);

app.use('/register', registerRouter);
app.use('/login', loginRouter);


module.exports = app;
