const { Surgery, Patient } = require('../models');

const getByDoctorName = async (doctor) => {
  const doctorPacients = await Surgery.findAll({
    where: { doctor },
    include: [
      {
        model: Patient,
        as: 'patients',
        attributes: { exclude: ['plan_id'] },
        through: { attributes: [] },
      },
    ],
  });
  return doctorPacients;
};

module.exports = { getByDoctorName };
