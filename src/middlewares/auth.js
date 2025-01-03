/*
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    if (payload.role !== 'admin') throw new Error('Forbidden');
    next();
  } catch (err) {
    res.status(403).json({ error: 'Forbidden' });
  }
};

module.exports = { authenticateAdmin };

*/
const {ADMIN_KEY} = require("../config")

const your_predefined_admin_key = ADMIN_KEY;

const authenticateAdmin = (req, res, next) => {
  const adminKey = req.headers["authorization"];

  if (adminKey !== `Bearer ${your_predefined_admin_key}`) { 
    return res.status(403).json({ error: "Unauthorized access. Invalid admin key." });
  }

  next();
};

module.exports = { authenticateAdmin };
