const express = require('express');
const cors = require('cors');
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./src/utils/swagger.yaml');

const sequelize = require('./config/db');
const Incident = require('./models/Incident');
const incidentRoutes = require('./routes/incidents');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/incidents', incidentRoutes);

sequelize.sync()
  .then(() => {
    console.log('✅ Base de données synchronisée');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Serveur backend lancé sur le port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erreur de synchronisation DB :', err);
  });

