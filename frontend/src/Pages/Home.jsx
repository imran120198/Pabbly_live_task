import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Styles/Product.module.css";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:8080/product/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCart = (product) => {
    axios
      .post(`http://localhost:8080/cart/`, product)
      .then((res) => {
        console.log(res.data);
        alert("Item Added to Cart");
        Navigate("/cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.productContainer}>
      {data.map((elem) => {
        return (
          <div className={styles.card}>
            <img src={elem.image} alt={elem.title} />
            <h3>{elem.title}</h3>
            <h3>Price : $ {elem.price}</h3>
            <button onClick={() => handleCart(elem)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
