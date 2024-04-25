const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

const cors = require("cors");

const { connection } = require("./Connection/Connection");
const { ProductRoute } = require("./Routes/Product.routes");
const { CartRoute } = require("./Routes/Cart.routes");
const { PaymentRoute } = require("./Routes/Payment.routes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome To Product Management and Payment Integration");
});

app.use("/product", ProductRoute);
app.use("/cart", CartRoute);
app.use("/payment", PaymentRoute);


app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected To Database");
  } catch (err) {
    console.log(err);
  }
  console.log("Running on PORT 8080");
});
