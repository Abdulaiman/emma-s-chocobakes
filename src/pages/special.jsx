import React from "react";

const SpecialDish = () => {
  return (
    <section className="special-dish text-center" aria-labelledby="dish-label">
      <div className="special-dish-banner">
        <img
          src="./assets/images/special-rice.jpg"
          width="940"
          height="900"
          loading="lazy"
          alt="special dish"
          className="img-cover"
        />
      </div>

      <div className="special-dish-content bg-black-10">
        <div className="container">
          <img
            src="./assets/images/badge-1.png"
            width="28"
            height="41"
            loading="lazy"
            alt="badge"
            className="abs-img"
          />

          <p className="slider-reveal-edit"> Foodstuff</p>
          <h2 className="headline-1 section-title">Premium Rice</h2>
          <p className="section-text">
            Our premium rice is sourced from the best farms, ensuring top
            quality and freshness. Perfect for cooking a variety of delicious
            meals, it provides a rich and nutritious base for any dish. Whether
            you're making stews, soups, or just plain rice, our rice delivers
            exceptional taste.
          </p>

          <div className="wrapper">
            <span className="span body-1">₦4200</span>
          </div>

          {/* <a href="#" className="btn btn-primary">
            <span className="text text-1">View All Products</span>
            <span className="text text-2" aria-hidden="true">
              View All Products
            </span>
          </a> */}
        </div>
      </div>

      <img
        src="./assets/images/shape-4.png"
        width="179"
        height="359"
        loading="lazy"
        alt=""
        className="shape shape-1"
      />
      <img
        src="./assets/images/shape-9.png"
        width="351"
        height="462"
        loading="lazy"
        alt=""
        className="shape shape-2"
      />
    </section>
  );
};

export default SpecialDish;
