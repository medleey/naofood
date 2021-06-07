const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Sequelize } = require('sequelize');

const restauRoutes = require('./routes/restau_routes'); //en local

require('dotenv-expand')(require('dotenv').config()); // in just single line
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{ 
  host: process.env.DB_HOST,
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const app = express();

app.use((req, res, next) => { //cors 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json()); //fichier de configuration 

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/restau', restauRoutes);

module.exports = app;

//mettre les actions dans sauce controller, remplacer app par export (export.put) - 
//tester les routes pour vérifier avec l'app en front end, 1er le crud (lire, modifer, supprimer)
//pour écrire sur BDD c'est SQL (mongoose s'en occupe, il le traduit)