import React from "react";
import styles from "../Styles/Navbar.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div className={styles.cart}>
        <Link to="/cart">
          <CiShoppingCart className={styles.carticon} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
