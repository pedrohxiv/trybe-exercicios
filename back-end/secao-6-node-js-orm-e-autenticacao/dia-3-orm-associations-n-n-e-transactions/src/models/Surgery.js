module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define(
    'Surgery',
    {
      surgeryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      specialty: {
        type: DataTypes.STRING,
      },
      doctor: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'Surgeries',
      underscored: true,
    },
  );

  return Surgery;
};
