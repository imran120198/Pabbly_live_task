import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Payment = () => {
  const [sessionId, setSessionId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCheckoutSession = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/payment/create-checkout-session",
          {
            method: "POST",
            body: JSON.stringify({}),
          }
        );
        const data = await response.json();
        setSessionId(data.sessionId);
      } catch (error) {
        console.error("Error fetching session ID:", error);
      }
    };

    fetchCheckoutSession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
          style={{ width: "500px", height: "300px" }}
        />
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$ 200.00</h5>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit"><Link to="/success">Checkout</Link></button>
      </form>
    </section>
  );
};

export default Payment;
