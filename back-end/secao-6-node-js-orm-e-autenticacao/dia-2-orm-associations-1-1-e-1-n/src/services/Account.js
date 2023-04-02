const { Account, Profile } = require('../models');
const { createProfile } = require('./Profile');

const getById = async (id) => {
  const account = await Account.findOne({
    where: { id },
    include: [{ model: Profile, as: 'profile' }],
  });
  return account;
};

const getByIdLean = async (id) => {
  const account = await Account.findOne({
    where: { id },
  });
  return account;
};

const createAccount = (email, password) => {
  if (!email || !password) {
    return { message: 'Todos os campos precisam ser preenchidos da forma correta!' };
  }
  return Account.create({ email, password });
};

const createAccountAndProfile = async ({
  email,
  password,
  firstName,
  lastName,
  phone,
}) => {
  const account = await createAccount(email, password);
  if (account.message) return account;
  const profile = await createProfile(firstName, lastName, phone, account.id);
  return profile;
};

module.exports = { getById, getByIdLean, createAccountAndProfile };
