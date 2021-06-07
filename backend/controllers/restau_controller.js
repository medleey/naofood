const fs = require('fs');
const db = require('../models');

//POUR RECHERCHER TOUS LES RESTAU
exports.getAllRestau = (req, res, next) => { //req = request, res = response 
  let limit = parseInt(req.params.limit  ?? 12);

  db.restau.findAll({
    limit,
  })//find va chercher quelque chose, va chercher tous les restau 
    .then(restaus => res.status(200).json(restaus))
    .catch(error => res.status(400).json({ error }));
},

exports.getAllNewRestau = (req, res, next) => { //req = request, res = response 
  console.log('prout')
  db.restau.findAll({
    order: [['createdAt', 'DESC']],
    limit: 3
    
  })
    .then(restaus => res.status(200).json(restaus))
    .catch(error => res.status(400).json({ error }));
}