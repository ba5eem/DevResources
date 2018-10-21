const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080;
const cors = require('cors');



// INIT
const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// READ
app.get('/', (req,res) => {
  // Serve Home Content here
  res.json({
    message: 'Read route',
    method: 'GET',
    data: [
      {title: 'Build Kanban Board'},
      {title: 'Fix car'},
      {title: 'Do Laundry'}
    ]
  });
});

// CREATE
app.post('/new', (req,res) => {
  let { email, password } = req.body;
  // Create new user here
  res.json({
    message: 'Create new route',
    method: 'POST',
    body: req.body
  });
});

// UPDATE
app.post('/edit', (req,res) => {
  let { email, password } = req.body;
  // Edit user here
  res.json({
    message: 'Edit route',
    method: 'POST',
    body: req.body
  });
});

// DELETE/ARCHIVE
app.post('/archive', (req,res) => {
  let { email, password } = req.body;
  // Archive user here
  res.json({
    message: 'Archive route',
    method: 'POST',
    body: req.body
  });
});

// 404
app.get('/*', (req,res) => {
  res.json({
    message: '404 route',
    method: 'GET'
  });
})

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});
