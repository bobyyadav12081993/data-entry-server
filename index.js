const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Covid19', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

const port = process.env.PORT || 8080;

app.use('/api', routes);

app.use(function (err, req, res, next) {
  res.status(500);
  console.debug(err);
  res.send('INternal server error');
});
app.listen(port, () => {
  console.log(`Express web app available at localhost: ${port}`);
});
