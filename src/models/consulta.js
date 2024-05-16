const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const Consulta = sequelize.define('Consulta', {
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  motivo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sintomas: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  diagnostico: {
    type: DataTypes.STRING,
    allowNull: true
  },
  observacoes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  // Adicione outros campos conforme necessário
});

module.exports = Consulta;
