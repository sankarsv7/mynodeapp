// routes/users.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE user
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    const [result] = await db.query(sql, [name, email]);

    res.json({ id: result.insertId, name, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all users
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ one user
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [
      req.params.id,
    ]);
    res.json(rows[0] || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE user
router.put('/:id', async (req, res) => {
  const { name, email } = req.body;
  try {
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    const [result] = await db.query(sql, [name, email, req.params.id]);

    res.json({ updated: result.affectedRows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE user
router.delete('/:id', async (req, res) => {
  try {
    const sql = 'DELETE FROM users WHERE id = ?';
    const [result] = await db.query(sql, [req.params.id]);

    res.json({ deleted: result.affectedRows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
