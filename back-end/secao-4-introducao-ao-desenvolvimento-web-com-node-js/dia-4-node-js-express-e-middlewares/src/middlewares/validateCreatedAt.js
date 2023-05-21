module.exports = (req, res, next) => {
  const {
    description: { createdAt },
  } = req.body;

  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(createdAt)) {
    return res.status(400).json({ message: "O campo createdAt deve ter o formato 'dd/mm/aaaa'" });
  }

  next();
};
