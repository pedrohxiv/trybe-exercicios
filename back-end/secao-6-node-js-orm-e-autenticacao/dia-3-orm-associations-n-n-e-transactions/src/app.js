const express = require('express');

const patientsController = require('./controllers/Patient');
const plansController = require('./controllers/Plan');
const surgeriesController = require('./controllers/Surgery');

const app = express();
app.use(express.json());

app.get('/patients/plans', patientsController.getAllPatientsPlans);
app.get('/patients/surgeries', patientsController.getAllPatientsSurgeries);
app.get('/plans/:id', plansController.getByIdPlans);
app.post('/patients', patientsController.createPatient);
app.get('/patients/surgeries/nodoctor', patientsController.getAllPatientsSurgeriesNoDoctor);
app.get('/surgeries/:name', surgeriesController.getByDoctorName);

module.exports = app;
