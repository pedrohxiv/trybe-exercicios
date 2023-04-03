module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define(
    'PatientSurgery',
    {},
    {
      timestamps: false,
      tableName: 'Patient_surgeries',
      underscored: true,
    },
  );

  PatientSurgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Patient, {
      foreignKey: 'surgery_id',
      as: 'patients',
      through: PatientSurgery,
      otherKey: 'patient_id',
    });

    models.Patient.belongsToMany(models.Surgery, {
      foreignKey: 'patient_id',
      as: 'surgeries',
      through: PatientSurgery,
      otherKey: 'surgery_id',
    });
  };

  return PatientSurgery;
};
