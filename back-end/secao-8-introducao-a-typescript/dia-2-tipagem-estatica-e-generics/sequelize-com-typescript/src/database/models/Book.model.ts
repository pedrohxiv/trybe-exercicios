import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';
import Author from './Author.model';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
}

Book.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    authorId: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id',
      },
    },
    genreId: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'genres',
        key: 'id',
      },
    },
  },
  {
    sequelize: db,
    modelName: 'books',
    timestamps: false,
    underscored: true,
  },
);

Book.belongsTo(Author, { foreignKey: 'id' });
Author.hasMany(Book, { foreignKey: 'authorId' });

export default Book;
