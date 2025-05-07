-- Création du rôle 'seck' si inexistant
DO
$do$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_catalog.pg_roles
      WHERE  rolname = 'seck') THEN

      CREATE ROLE seck LOGIN PASSWORD '3004';
   END IF;
END
$do$;

-- Création de la base de données 'campagne_db' si inexistante
DO
$do$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_database
      WHERE datname = 'campagne_db') THEN

      CREATE DATABASE campagne_db;
   END IF;
END
$do$;

-- Connexion à la base de données 'campagne_db'
\c campagne_db

-- Création de la table 'campagnes' si inexistante
CREATE TABLE IF NOT EXISTS campagnes (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100),
  description TEXT
);

-- Insertion de données d'exemple avec gestion des doublons
INSERT INTO campagnes (nom, description) VALUES
  ('Campagne Été 2025', 'Publicité pour la collection été 2025'),
  ('Campagne Noël 2025', 'Offres spéciales pour Noël 2025')
ON CONFLICT DO NOTHING;
