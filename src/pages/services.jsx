import React from "react";

const ServiceCard = ({ imageSrc, altText, title, link }) => {
  return (
    <li>
      <div className="service-card">
        <a href={link} className="has-before hover:shine">
          <figure
            className="card-banner img-holder"
            style={{ "--width": 285, "--height": 336 }}
          >
            <img
              src={imageSrc}
              width="285"
              height="336"
              loading="lazy"
              alt={altText}
              className="img-cover"
            />
          </figure>
        </a>
        <div className="card-content">
          <h3 className="title-4 card-title">
            <a href={link}>{title}</a>
          </h3>
          <a href={link} className="btn-text hover-underline label-2">
            View Details
          </a>
        </div>
      </div>
    </li>
  );
};

const ServiceSection = () => {
  const services = [
    {
      imageSrc: "./assets/images/cupcake.jpg",
      altText: "Cupcakes",
      title: "Decorative Cupcakes",
      link: "#cupcake",
    },
    {
      imageSrc: "./assets/images/cake.jpg",
      altText: "Cake",
      title: "Delicious Cakes",
      link: "#cake",
    },
    {
      imageSrc: "./assets/images/brownie.jpg",
      altText: "Brownies",
      title: "Fudgy Brownies",
      link: "#brownie",
    },
    {
      imageSrc: "./assets/images/donuts.jpg",
      altText: "Donuts",
      title: "Glazed Donuts",
      link: "#donut",
    },
    {
      imageSrc: "./assets/images/snack.jpg",
      altText: "Pastries",
      title: "Savory Pastries",
      link: "#snack",
    },
    {
      imageSrc: "./assets/images/weddingcake.jpg",
      altText: "Wedding Cake",
      title: "Custom Wedding Cakes",
      link: "#weddingcake",
    },
  ];

  return (
    <section
      className="section service bg-black-10 text-center"
      aria-label="service"
    >
      <div className="container">
        <p className="slider-reveal-edit">Baked Delights for Every Occasion</p>
        <h2 className="headline-1 section-title">
          Freshly Baked, Always Delicious
        </h2>
        <p className="section-text">
          Discover the finest bakery treats. From indulgent cakes to buttery
          pastries, we bring you delightful flavors that make every moment
          special.
        </p>

        <ul className="grid-list">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              altText={service.altText}
              title={service.title}
              link={service.link}
            />
          ))}
        </ul>

        <img
          src="./assets/images/shape-1.png"
          width="246"
          height="412"
          loading="lazy"
          alt="shape"
          className="shape shape-1 move-anim"
        />
        <img
          src="./assets/images/shape-2.png"
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
      </div>
    </section>
  );
};

export default ServiceSection;
