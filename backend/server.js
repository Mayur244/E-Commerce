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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNkZJZO6NvOYTqpyCGdANzp-kB-f5Vc3ivo9gbHwOoeiJUc2abNXlZqps9vQcUtjWICv8&usqp=CAU",
  },
  {
    id: 2,
    name: "Headphones",
    price: 3000,
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/041/732/624/small_2x/ai-generated-headphones-resting-on-table-free-photo.jpeg",
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500,
    imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230630/pngtree-rgb-lit-gaming-keyboard-and-3d-rendered-pc-case-for-ultimate-image_3705804.jpg",
  },
  {
    id: 4,
    name: "Mouse",
    price: 800,
    imageUrl: "https://wallpapers.com/images/hd/gaming-mice-1600-x-900-wallpaper-vitcrhi4vf0gfvzn.jpg",
  },
  {
    id: 5,
    name: "Monitor",
    price: 12000,
    imageUrl: "https://cdn.mos.cms.futurecdn.net/UcL9HbAeeruKm53EjA3a8o.jpg",
  },
  {
    id: 6,
    name: "Smartphone",
    price: 25000,
    imageUrl: "https://cdn.thewirecutter.com/wp-content/media/2025/08/BEST-ANDROID-PHONES-00980-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
  },
  {
    id: 7,
    name: "Smartwatch",
    price: 7000,
    imageUrl: "https://i.ytimg.com/vi/-qk5RFmucIU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB58CRbGvLZhqLVLeSk__Fz-qds7g",
  },
  {
    id: 8,
    name: "Tablet",
    price: 18000,
    imageUrl: "https://images.indianexpress.com/2024/10/amazon-fire-hd-8-ai.jpg",
  },
  {
    id: 9,
    name: "Camera",
    price: 40000,
    imageUrl: "https://static.vecteezy.com/system/resources/previews/054/483/671/non_2x/canon-camera-is-laying-on-the-ground-the-lens-is-open-and-the-camera-is-turned-off-free-photo.jpg",
  },
  {
    id: 10,
    name: "Printer",
    price: 9000,
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/025/496/560/small_2x/modern-office-machinery-prints-out-successful-paperwork-with-creativity-generated-by-ai-free-photo.jpg",
  },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

// const items = [{id : 1, quantity : 2}]
// let items;

app.post("/api/checkout", (req, res) => {

  const { items } = req.body;

  if (!items || !Array.isArray(items)) {
    return res
      .status(400)
      .json({
        message: "Invalid order format. Expected { items: [ {id, quantity} ] }",
      });
  }

  items.forEach((order) => {
    const product = products.find((p) => p.id === order.id);
    if (product) {
      console.log(`- ${product.name} x ${order.quantity}`);
    }
  });

  res.json({ message: "Order placed successfully" });
});

// app.get('/', (req, res) => {
//     res.send("Hello World!");
// })

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
