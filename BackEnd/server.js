// server.js

//Imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://conor:test123@advanceddb-deefv.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const motorbikeSchema = new Schema({
  model: String,
  year: String,
  price: String,
  description: String
});
const MotorbikeModel = mongoose.model('motorbike', motorbikeSchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/api/motorbikes', (req, res, next) => {

  console.log("get request")
  MotorbikeModel.find((err, data) => {
    res.json({ motorbikes: data });
  })
})

app.get('/api/motorbikes/search/:model/:criteria', (req, res) => {
  if (req.params.criteria == 'model') {
    MotorbikeModel.find({ 'model': req.params.model },
      (error, data) => {
        res.json(data);
      })
  }
})

app.get('/api/motorbikes/:id', (req, res) => {
  console.log(req.params.id);

  MotorbikeModel.findById(req.params.id, (err, data) => {
    res.json(data);
  })
})

app.delete('/api/motorbikes/:id', (req, res) => {
  console.log(req.params.id);

  MotorbikeModel.deleteOne({ _id: req.params.id }, (error, data) => {
    if (error)
      res.json(error);

    res.json(data);
  })
})

app.post('/api/motorbikes', function (req, res) {
  console.log(req.body),

    MotorbikeModel.create({
      model: req.body.model,
      year: req.body.year,
      price: req.body.price,
      description: req.body.description,
    });
  console.log('post Sucessfull');

})

app.put('/api/motorbikes/:id', function(req, res) {
  console.log("Put: ", req.body);
  console.log("Edit " + req.params.id);

  MotorbikeModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, data) => {
      res.send(data);
    })
})

// Start Server 
const PORT = 4000;

app.listen(PORT, function () {
  console.log('Server is running on Port: ', PORT);
}); 