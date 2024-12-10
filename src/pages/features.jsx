import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: "./assets/images/features-icon-1.png",
      title: "Hygienic Food",
      description:
        "We ensure all our food products are prepared and packaged with the highest hygiene standards.",
    },
    {
      id: 2,
      icon: "./assets/images/features-icon-2.png",
      title: "Fresh Produce",
      description:
        "We source only the freshest ingredients, ensuring you get the best quality in every meal.",
    },
    {
      id: 3,
      icon: "./assets/images/features-icon-3.png",
      title: "Affordable Pricing",
      description:
        "Our food products, like rice and beans, are available at reasonable prices, ensuring great value for money.",
    },
    {
      id: 4,
      icon: "./assets/images/features-icon-4.png",
      title: "On-Time Delivery",
      description:
        "We ensure fast and reliable delivery of your orders, bringing food right to your doorstep.",
    },
  ];

  return (
    <section className="section features text-center" aria-label="features">
      <div className="container">
        <p className="slider-reveal-edit">Why Choose Us</p>
        <h2 className="headline-1 section-title">Our Strength</h2>
        <ul className="grid-list">
          {features.map((feature) => (
            <li className="feature-item" key={feature.id}>
              <div className="feature-card">
                <div className="card-icon">
                  <img
                    src={feature.icon}
                    width="100"
                    height="80"
                    loading="lazy"
                    alt="icon"
                  />
                </div>
                <h3 className="title-2 card-title">{feature.title}</h3>
                <p className="label-1 card-text">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <img
          src="./assets/images/shape-7.png"
          width="208"
          height="178"
          loading="lazy"
          alt="shape"
          className="shape shape-1"
        />
        <img
          src="./assets/images/shape-8.png"
          width="120"
          height="115"
          loading="lazy"
          alt="shape"
          className="shape shape-2"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
