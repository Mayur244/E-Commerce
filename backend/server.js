const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 65000,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Headphones",
    price: 3000,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Mouse",
    price: 800,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Monitor",
    price: 12000,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Smartphone",
    price: 25000,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Smartwatch",
    price: 7000,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Tablet",
    price: 18000,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Camera",
    price: 40000,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Printer",
    price: 9000,
    imageUrl: "https://via.placeholder.com/150",
  },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

// const items = [{id : 1, quantity : 2}]
// let items;

app.post("/api/order", (req, res) => {

  const { items } = req.body;

  if (!items || !Array.isArray(items)) {
    return res
      .status(400)
      .json({
        message: "Invalid order format. Expected { items: [ {id, quantity} ] }",
      });
  }


  console.log("📦 New Order Received:");

  items.forEach((order) => {
    const product = products.find((p) => p.id === order.id);
    if (product) {
      console.log(`- ${product.name} x ${order.quantity}`);
    }
  });

  res.json({ message: "Order placed successfully" });
});

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
