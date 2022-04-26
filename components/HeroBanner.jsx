import React from "react";
import Link from "next/link";
const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-small">SMALL TEXT</p>
        <h3>MID TXT</h3>
        <img src="" className="hero-banner-image"></img>

        <div>
          <Link href="/product/ID">
            <button type="button">BTN TXT</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>DESCPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
