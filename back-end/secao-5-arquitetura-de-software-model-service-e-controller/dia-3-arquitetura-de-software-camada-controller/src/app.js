const express = require('express');

const { passengerRouter, driverRoutes, carRouter } = require('./routers');

const app = express();

app.use(express.json());

app.use('/passengers', passengerRouter);
app.use('/drivers', driverRoutes);
app.use('/cars', carRouter);

module.exports = app;
