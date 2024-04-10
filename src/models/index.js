'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.use_env_variable 
    ? process.env[config.use_env_variable] 
    : config.database, 
  config.username, 
  config.password, 
  config
);

// Carregar modelos e associar ao banco de dados
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      !file.includes('.test.js')
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Associar modelos se houver uma função de associação definida
Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

// Exportar objetos sequelize e Sequelize
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
