const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())


// use body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.route('/api/cats').post((req, res) => {
  res.send(201, req.body);
});



app.listen(8000, () => {
    console.log('Server is running');
});

// Get cats list
app.route('/api/cats').get((req, res) => {
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }]
    });
});

// Get cat data
app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.send({ name: requestedCatName });
});

// Update cat data
app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body);
  });

  // Delete cat data
  app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204);
  });