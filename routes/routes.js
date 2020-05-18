const routes = require('express').Router();
const CovidData = require('./../models/covidData.model');

routes.get('/get/data', (req, res, next) => {
  CovidData.find({}, (err, data) => {
    if (err) {
      return next(err);
    }
    res.send(data);
  });
});

routes.post('/add/data', (req, res, next) => {
  const covidData = new CovidData(req.body.dayData);
  covidData.save((err, data) => {
    if (err) {
      return next(err);
    }
    res.json({
      msg: 'Data added successfully',
      data,
    });
  });
});

routes.post('/update/data', (req, res, next) => {
  const dayData = req.body.dayData;
  CovidData.updateOne(
    { _id: dayData._id },
    {
      stateName: dayData.stateName,
      dateReported: dayData.dateReported,
      name: dayData.name,
      deceased: dayData.deceased,
      recovered: dayData.recovered,
      newCases: dayData.newCases,
    },
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.send(result);
    }
  );
});

module.exports = routes;
