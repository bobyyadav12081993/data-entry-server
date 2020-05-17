const mongoose = require('mongoose');

const covidDataSchema = new mongoose.Schema({
  name: String,
  dateReported: { type: Date, default: new Date() },
  stateName: String,
  deceased: Number,
  recovered: Number,
  newCases: Number,
});

const CovidData = mongoose.model('CovidData', covidDataSchema, 'CovidData');
module.exports = CovidData;
