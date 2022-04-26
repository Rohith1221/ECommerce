import React from "react";
import { Product, FooterBanner, Footer, HeroBanner } from "../components";
const index = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["product 1 ", "product 2 ", "product 3 "].map((prod) => prod)}
      </div>
      <FooterBanner />
    </>
  );
};

export default index;
