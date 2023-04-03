const { Plan, Patient } = require('../models');

const getByIdPlans = async (planId) => {
  const plan = await Plan.findAll({
    where: { planId },
    include: [{ model: Patient, as: 'patients' }],
  });
  return plan;
};

module.exports = { getByIdPlans };
