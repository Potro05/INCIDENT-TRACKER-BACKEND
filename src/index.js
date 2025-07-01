const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/db');

const Incident = require('./models/Incident');

const incidentRoutes = require('./routes/incidents');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/incidents', incidentRoutes);

sequelize.sync()
  .then(() => {
    console.log(' Base de données synchronisée');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(` Serveur backend lancé sur le port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erreur de synchronisation DB :', err);
  });
