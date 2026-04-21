const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const DB_PATH = path.join(__dirname, 'data', 'db.json');

//helper function to read DB
function readDB() {
  const data = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

// get products
app.get('/products', (req, res) => {
  const db = readDB();
  res.json(db.products);
});

//post order

app.post('/orders', (req, res) => {
  const db = readDB();

  const newOrder = {
    id: Date.now(),
    items: req.body.items,
    status: "pending"
  };

  db.orders.push(newOrder);
  writeDB(db);

  res.json({ message: "Order Placed", order: newOrder });
});

// start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
