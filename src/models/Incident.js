const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Incident = sequelize.define('Incident', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  statut: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Nouveau'
  }
});

module.exports = Incident;

