// routes/tutorial.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE tutorial
router.post('/', async (req, res) => {
  const { title, description, published } = req.body;
  try {
    const sql = 'INSERT INTO Tutorial (title, description, published) VALUES (?, ?, ?)';
    const [result] = await db.query(sql, [title, description, published]);

    res.json({ id: result.insertId, title, description, published });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all tutorial
router.get("/", (req, res) => {
     try {
    db.query("SELECT * FROM Tutorial", (err, rows) => {
        if (err) return res.status(500).json({ error: err });
        res.json(rows);
    });
    } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
/*
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Tutorial');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
*/

// READ one tutorial
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Tutorial WHERE id = ?', [
      req.params.id,
    ]);
    res.json(rows[0] || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE tutorial
router.put('/:id', async (req, res) => {
  const { title, description, published } = req.body;
  try {
    const sql = 'UPDATE Tutorial SET title = ?, description = ?, published = ? WHERE id = ?';
    const [result] = await db.query(sql, [name, email, req.params.id]);

    res.json({ updated: result.affectedRows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE tutorial
router.delete('/:id', async (req, res) => {
  try {
    const sql = 'DELETE FROM Tutorial WHERE id = ?';
    const [result] = await db.query(sql, [req.params.id]);

    res.json({ deleted: result.affectedRows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
