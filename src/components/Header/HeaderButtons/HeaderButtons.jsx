import React from 'react'
import { Link } from 'react-router-dom';
import user from "../../../assets/images/icons/user.svg";
import wishlist from "../../../assets/images/icons/wishlist.svg";
import cart from "../../../assets/images/icons/cart.svg";
import classes from "../HeaderTop/headerTopStyles.module.css";

const HeaderButtons = ({children}) => {
  return (
    <div className={classes.ecHeaderBottons}>
      <div className={`${classes.ecHeaderUser} ${classes.dropdown}`}>
        <button className={classes.dropdownToggle} data-bs-toggle="dropdown">
          <img
            src={user}
            className={`svg_img ${classes.headerSvg}`}
            alt="user"
          />
        </button>
        <ul className={`${classes.dropdownMenu} ${classes.dropdownMenuRight}`}>
          <li>
            <Link className={classes.dropdownItem} to="">
              Register
            </Link>
          </li>
          <li>
            <Link className={classes.dropdownItem} to="">
              Checkout
            </Link>
          </li>
          <li>
            <Link className={classes.dropdownItem} to="">
              Login
            </Link>
          </li>
        </ul>
      </div>

      <Link
        to=""
        className={`${classes.ecHeaderBtn} ${classes.ecHeaderWishlist}`}
      >
        <div className={classes.headerIcon}>
          <img
            src={wishlist}
            className={`svg_img ${classes.headerSvg}`}
            alt="wishlist"
          />
        </div>
        <span className={classes.ecHeaderCount}>4</span>
      </Link>

      <Link to="" className={`${classes.ecHeaderBtn} ec-side-toggle"`}>
        <div className={classes.headerIcon}>
          <img
            src={cart}
            className={`svg_img ${classes.headerSvg}`}
            alt="cart"
          />
        </div>
        <span
          className={`${classes.ecHeaderCount} ec-cart-count cart-count-lable`}
        >
          3
        </span>
      </Link>
      {children}
      
    </div>
  );
}

export default HeaderButtons