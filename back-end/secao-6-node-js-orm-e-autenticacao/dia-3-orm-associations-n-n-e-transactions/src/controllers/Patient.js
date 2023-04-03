const patientsService = require('../services/Patient');

const getAllPatientsPlans = async (_req, res) => {
  const patientsPlans = await patientsService.getAllPatientsPlans();
  return res.status(200).json(patientsPlans);
};

const getAllPatientsSurgeries = async (_req, res) => {
  const patientsSurgeries = await patientsService.getAllPatientsSurgeries();
  return res.status(200).json(patientsSurgeries);
};

const createPatient = async (req, res) => {
  await patientsService.createPatient(req.body);
  return res.status(201).json({ message: 'Paciente cadastrado com sucesso' });
};

const getAllPatientsSurgeriesNoDoctor = async (_req, res) => {
  const patientsSurgeriesNoDoctor = await patientsService.getAllPatientsSurgeriesNoDoctor();
  return res.status(200).json(patientsSurgeriesNoDoctor);
};

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatient,
  getAllPatientsSurgeriesNoDoctor,
};
