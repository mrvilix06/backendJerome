const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// Création d'une application express
const app = express();
const port = 5000;

// Middleware pour parser le JSON
app.use(cors());
app.use(bodyParser.json());

// Simule une base de données très simple en mémoire
let estAuBureau = false; // État initial de Jérôme
const motDePasse = 'motdepasse123'; // Mot de passe hypothétique pour Jérôme

// Point de terminaison pour la connexion de Jérôme
app.post('/login', (req, res) => {
  const { password } = req.body;
  if (password === motDePasse) {
    res.status(200).json({ message: "Authentification réussie", authentifie: true });
  } else {
    res.status(401).json({ message: "Mot de passe incorrect", authentifie: false });
  }
});

// Point de terminaison pour changer l'état de présence
app.post('/etat-presence', (req, res) => {
  const { password, presence } = req.body;
  if (password === motDePasse) {
    estAuBureau = presence;
    res.status(200).json({ message: `État de présence mis à jour : ${estAuBureau ? "au bureau" : "pas au bureau"}` });
  } else {
    res.status(401).json({ message: "Non autorisé" });
  }
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
