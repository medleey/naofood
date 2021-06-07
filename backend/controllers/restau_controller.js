const fs = require('fs');
const db = require('../models');

//POUR RECHERCHER TOUS LES RESTAU
exports.getAllRestau = (req, res, next) => { //req = request, res = response 
  db.restau.findAll()//find va chercher quelque chose, va chercher tous les restau 
    .then(restaus => res.status(200).json(restaus))
    .catch(error => res.status(400).json({ error }));
}

//POUR CHERCHER UN RESTAU
exports.getOneRestau = (req, res, next) => {
  db.restau.findOne({ _id: req.params.id })
    .then(restau => res.status(200).json(restau)) //ok
    .catch(error => res.status(404).json({ error })); //objet non trouvé 
}


