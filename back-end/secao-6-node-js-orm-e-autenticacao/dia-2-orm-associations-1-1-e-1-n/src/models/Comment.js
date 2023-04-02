module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      message: {
        type: DataTypes.STRING,
      },
      upvoting: {
        type: DataTypes.INTEGER,
      },
      downvoting: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      tableName: 'Comments',
      underscored: true,
    },
  );

  Comment.associate = (models) => {
    Comment.belongsTo(models.Account, { foreignKey: 'accountId', as: 'account' });
  };

  return Comment;
};
