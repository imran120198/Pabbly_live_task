const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const { Router } = require("express");

const PaymentRoute = Router();

PaymentRoute.post("/:amount", async (req, res) => {
  try {
    const { amount } = req.params;
    const payment = await stripe.paymentIntents.create({
      amount: parseInt(amount),
      currency: "usd",
    });
    res.send(payment);
  } catch (err) {
    res.send(err);
  }
});

PaymentRoute.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "{{PRICE_ID}}",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.send(session);
});

module.exports = {
  PaymentRoute,
};
