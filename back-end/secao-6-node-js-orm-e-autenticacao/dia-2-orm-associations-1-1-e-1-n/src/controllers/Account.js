const accountService = require('../services/Account');

const getById = async (req, res) => {
  const { id } = req.params;

  const account = await accountService.getById(id);

  if (!account) return res.status(404).json({ message: 'Account not found' });
  return res.status(200).json(account);
};

const getByIdLean = async (req, res) => {
  const { id } = req.params;

  const account = await accountService.getByIdLean(id);

  if (!account) return res.status(404).json({ message: 'Account not found' });
  return res.status(200).json(account);
};

const createAccountAndProfile = async (req, res) => {
    const newAccount = await accountService.createAccountAndProfile(req.body);

    if (newAccount.message) return res.status(404).json(newAccount);
    return res.status(201).json({ message: 'Account successfully registered' });
};

module.exports = { getById, getByIdLean, createAccountAndProfile };
