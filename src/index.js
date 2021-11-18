if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Initializations
const app = express();
require('../database');

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api/talent', require('../routes/talents'));
//app.use('/api/headhunter', require('../routes/headhunters'));

// Start the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
