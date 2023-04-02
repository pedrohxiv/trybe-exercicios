const { Profile } = require('../models');

const createProfile = (firstName, lastName, phone, accountId) => {
  if (!firstName || !lastName || !phone || !accountId) {
    return { message: 'Todos os campos precisam ser preenchidos da forma correta!' };
  }
  return Profile.create({ firstName, lastName, phone, accountId });
};

module.exports = { createProfile };
