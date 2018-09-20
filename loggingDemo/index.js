const express = require('express');
const app = express();
const winston = require('winston');
const morgan = require('morgan');

app.use(morgan('dev'));


const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console()
  ]
});

app.get('/', (req,res) => {
	logger.info('oal')
	res.json('ola');
});

app.listen(9000);