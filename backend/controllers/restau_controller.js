const uuid = require('uuid/v1'); //identifiant unique
const Sauce = require('../models/restau_model');
const fs = require('fs');

//POUR RECHERCHER TOUS LES RESTAU
exports.getAllRestau = (req, res, next) => { //req = request, res = response 
  Sauce.find()//find va chercher quelque chose, va chercher tous les restau 
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({ error }));
}

//POUR CHERCHER UN RESTAU
exports.getOneRestau = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then(sauce => res.status(200).json(sauce)) //ok
    .catch(error => res.status(404).json({ error })); //objet non trouvé 
}


