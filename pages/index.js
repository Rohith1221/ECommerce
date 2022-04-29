import React from "react";
import { Product, FooterBanner, Footer, HeroBanner } from "../components";
import { client } from "../lib/client";

const index = ({ product, bannerData }) => {
  return (
    <>
      {console.log(bannerData)}
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {product?.map((prod) => prod.name)}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const product = await client.fetch(query);

  const BannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(BannerQuery);

  return {
    props: { bannerData, product },
  };
};
export default index;
