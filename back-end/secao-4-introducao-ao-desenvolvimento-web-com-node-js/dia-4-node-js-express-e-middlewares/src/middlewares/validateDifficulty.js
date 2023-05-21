module.exports = (req, res, next) => {
  const {
    description: { difficulty },
  } = req.body;

  if (!['Fácil', 'Médio', 'Difícil'].includes(difficulty)) {
    return res.status(400).json({ message: "O campo difficulty deve ser 'Fácil', 'Médio' ou 'Difícil'" });
  }

  next();
};
