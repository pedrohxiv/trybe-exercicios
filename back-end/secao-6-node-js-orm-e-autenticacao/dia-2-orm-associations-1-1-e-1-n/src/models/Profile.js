module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    'Profile',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'Profiles',
      underscored: true,
    },
  );

  Profile.associate = (models) => {
    Profile.belongsTo(models.Account, { foreignKey: 'accountId', as: 'account' });
  };

  return Profile;
};
