import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import '../styles/Home.css';


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Bol Acılı Pizzamos </h1>
        <p> Tatmadan Geçme </p>
        <Link to="/menu">
          <button> Sipariş ver  </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
