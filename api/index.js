const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/products", (req, res) => {
  res.json([
    {
      id: "1",
      name: "Subaru",
      description: "Subarus are awesome",
      price: "12000",
      quantity: 1,
      image:
        "https://file.kelleybluebookimages.com/kbb/base/evox/ExtSpP/11968/2018-Subaru-Outback-360SpinFrame_11968_032_2400x1800.png?interpolation=high-quality&downsize=391:*"
    },
    {
      id: "2",
      name: "Beard Comb Set",
      description: "Want a great bear? Here you go!",
      price: "33",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0052/6018/1607/products/starter-beard-growth-kit_b09ce8d5-ebde-465c-a406-b77b0592c4c5_1024x.png?v=1568849879"
    },
    {
      id: "3",
      name: "Sweet Mountain Bike",
      description: "Guerilla gravity smash carbon mountain bike",
      price: "5087",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/2318/5263/products/BMT14709_KB_01_1024x1024.jpg?v=1576893064"
    },
    {
      id: "4",
      name: "Brew Kit",
      description: "Deluxe Homebrew Starter Kit #1 Best Seller",
      price: "169",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/2785/6868/products/deluxe-starter-kit_top-down_x700.jpg?v=1571725287"
    },
    {
      id: "5",
      name: "Ski",
      description: "Men/womens ski set",
      price: "345",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0670/1915/products/intermediate-advanced-mens-ski-package-black-monster-177_2000x.jpg?v=1575900767"
    },
    {
      id: "6",
      name: "Antigua Dog Collar",
      description: "Im a product description",
      price: "19",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/2278/3141/products/Web_Antigua_Collar_1024x1024.jpg?v=1543858399"
    }
  ]);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
