const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Incident = sequelize.define('Incident', {
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('Evasion', 'Panne', 'Blessure'),
    allowNull: false,
  },
  zone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  urgence: {
    type: DataTypes.ENUM('Basse', 'Moyenne', 'Haute'),
    allowNull: false,
  },
  statut: {
    type: DataTypes.ENUM('En cours', 'Résolu'),
    defaultValue: 'En cours',
  },
}, {
  timestamps: true,
});

module.exports = Incident;
