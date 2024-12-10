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
      imageSrc: "./assets/images/service-1.jpg", // Replace with an actual beans image
      altText: "Beans",
      title: "Fresh Beans",
      link: "#",
    },
    {
      imageSrc: "./assets/images/service-2.jpg", // Replace with an actual rice image
      altText: "Rice",
      title: "Premium Rice",
      link: "#",
    },
    {
      imageSrc: "./assets/images/service-3.jpg", // Replace with another beans image
      altText: "Beans Variety",
      title: "Variety of Beans",
      link: "#",
    },
  ];

  return (
    <section
      className="section service bg-black-10 text-center"
      aria-label="service"
    >
      <div className="container">
        <p className="slider-reveal-edit">Grains for Every Need</p>
        <h2 className="headline-1 section-title">
          Fresh, Affordable, Reliable
        </h2>
        <p className="section-text">
          Discover the highest quality grains on campus. From premium rice to
          fresh beans, we provide the staples you need for every meal, at prices
          that fit your budget.
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
