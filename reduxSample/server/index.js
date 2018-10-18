const express = require('express');
const app = express();

const fakeData = [{
    id: 1,
    task: "Finish report",
    assigned: 'Batman',
    status: "progress",
    comments: 22
  },
  {
    id: 2,
    task: "Buy more socks",
    assigned: 'Batman',
    status: "queue",
    comments: 45
  },
  {
    id: 3,
    task: "Get some sleep",
    assigned: 'Batman',
    status: "done",
    comments: 2
  },
  {
    id: 4,
    task: "Go fishing",
    assigned: 'Batman',
    status: "progress",
    comments: 99
  },
  {
    id: 5,
    task: "Save the world",
    assigned: 'Batman',
    status: "queue",
    comments: 7
  },
  {
    id: 6,
    task: "Code",
    assigned: 'Batman',
    status: "done",
    comments: 10
  }
]

app.get('/cards', (req,res) => {
  res.json(fakeData);
});

app.listen(9000);