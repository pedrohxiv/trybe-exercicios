const surgeriesService = require('../services/Surgery');

const getByDoctorName = async (req, res) => {
  const { name } = req.params;

  const doctorPacients = await surgeriesService.getByDoctorName(name);

  return res.status(200).json(doctorPacients);
};

module.exports = { getByDoctorName };
