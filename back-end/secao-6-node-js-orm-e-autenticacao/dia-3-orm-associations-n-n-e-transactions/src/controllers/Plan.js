const plansService = require('../services/Plan');

const getByIdPlans = async (req, res) => {
  const { id } = req.params;

  const plan = await plansService.getByIdPlans(id);

  return res.status(200).json(plan);
};

module.exports = { getByIdPlans };
