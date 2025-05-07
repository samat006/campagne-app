// backend/server.js
const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  user: 'user',
  host: 'db',
  database: 'campagne',
  password: 'pass',
  port: 5432,
});

app.get('/api/campagnes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM campagnes');
    res.json(result.rows);
  } catch (err) {
    console.error('Erreur lors de la requête', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(port, () => {
  console.log(`Backend démarré sur http://localhost:${port}`);
});
