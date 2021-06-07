const mongoose = require('mongoose');

const restauSchema = mongoose.Schema({
  logo: { type: String, required: true },
  banner: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true }
});

module.exports = mongoose.model('Restau', restauSchema); 