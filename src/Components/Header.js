import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="logodo.png"
          alt="Flipkart"
        />
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          name=""
          id=""
        />
        <SearchIcon />
      </div>
      <div className="login">
        <button>Login</button>
      </div>
      <div className="wishlist">
        <FavoriteBorderIcon/>
        <span>WishList</span>
      </div>
      <div className="more">
        <span>More</span>
        <ExpandMoreIcon />
      </div>
      <div className="cart">
        <ShoppingCartIcon />
      </div>
    </div>
  );
};

export default Header;
