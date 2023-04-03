const { Patient, Plan, Surgery } = require('../models');

const getAllPatientsPlans = async () => {
  const patientsPlans = await Patient.findAll({ include: { model: Plan, as: 'plan' } });
  return patientsPlans;
};

const getAllPatientsSurgeries = async () => {
  const patientsSurgeries = await Patient.findAll({
    include: { model: Surgery, as: 'surgeries' },
  });
  return patientsSurgeries;
};

const createPatient = async ({ fullname, planId }) => {
  await Patient.create({ fullname, planId });
};

const getAllPatientsSurgeriesNoDoctor = async () => {
  const patientsSurgeriesNoDoctor = await Patient.findAll({
    include: {
      model: Surgery,
      as: 'surgeries',
      attributes: { exclude: ['doctor'] },
      through: { attributes: [] },
    },
    attributes: { exclude: ['plan_id'] },
  });
  return patientsSurgeriesNoDoctor;
};

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatient,
  getAllPatientsSurgeriesNoDoctor,
};
