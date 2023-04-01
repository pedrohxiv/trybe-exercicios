'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        pageQuantity: 180,
        createdAt: new Date('2022-01-28T13:23:32.514Z'),
        updatedAt: new Date('2022-02-12T09:17:42.867Z'),
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        pageQuantity: 281,
        createdAt: new Date('2022-03-05T16:42:51.931Z'),
        updatedAt: new Date('2022-03-20T11:32:21.761Z'),
      },
      {
        title: '1984',
        author: 'George Orwell',
        pageQuantity: 328,
        createdAt: new Date('2022-04-15T08:54:21.302Z'),
        updatedAt: new Date('2022-05-01T17:12:13.608Z'),
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        pageQuantity: 279,
        createdAt: new Date('2022-06-10T14:37:19.819Z'),
        updatedAt: new Date('2022-06-25T10:21:08.409Z'),
      },
      {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        pageQuantity: 224,
        createdAt: new Date('2022-07-18T19:02:11.492Z'),
        updatedAt: new Date('2022-08-02T12:45:01.987Z'),
      },
      {
        title: 'Animal Farm',
        author: 'George Orwell',
        pageQuantity: 112,
        createdAt: new Date('2022-09-07T11:23:39.098Z'),
        updatedAt: new Date('2022-09-22T15:56:29.116Z'),
      },
      {
        title: 'Brave New World',
        author: 'Aldous Huxley',
        pageQuantity: 311,
        createdAt: new Date('2022-10-18T06:45:12.740Z'),
        updatedAt: new Date('2022-11-02T19:27:50.243Z'),
      },
      {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        pageQuantity: 1178,
        createdAt: new Date('2022-12-03T15:38:02.312Z'),
        updatedAt: new Date('2023-01-08T07:12:34.817Z'),
      },
      {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pageQuantity: 366,
        createdAt: new Date('2023-02-14T10:17:27.998Z'),
        updatedAt: new Date('2023-03-01T22:33:19.421Z'),
      },
      {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        pageQuantity: 689,
        createdAt: new Date('2023-03-25T18:59:50.003Z'),
        updatedAt: new Date('2023-04-01T08:12:31.712Z'),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
