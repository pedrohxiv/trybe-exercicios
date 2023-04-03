module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define(
    'Plan',
    {
      planId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      coverage: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DOUBLE,
      },
    },
    {
      timestamps: false,
      tableName: 'Plans',
      underscored: true,
    },
  );

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, { foreignKey: 'plan_id', as: 'patients' });
  };

  return Plan;
};
