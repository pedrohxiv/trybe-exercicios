import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

class Author extends Model {
  declare id: number;
  declare name: string;
}

Author.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'authors',
    timestamps: false,
    underscored: true,
  },
);

export default Author;
