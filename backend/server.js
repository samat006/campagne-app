const express = require('express');
const cors = require('cors');  // Importer cors
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Utiliser cors pour autoriser les requêtes provenant d'autres origines (ici localhost:8080)
app.use(cors());  // Activer CORS pour toutes les requêtes

const pool = new Pool({
  user: 'seck',
  host: 'db',
  database: 'campagne_db',
  password: '3004',
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
