import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: "./assets/images/features-icon-1.png",
      title: "Freshly Baked Goods",
      description:
        "Our baked goods are made fresh daily, ensuring you enjoy the finest flavors and textures with every bite.",
    },
    {
      id: 2,
      icon: "./assets/images/features-icon-2.png",
      title: "Top-Notch Hygiene",
      description:
        "We adhere to the highest hygiene standards, ensuring every product is baked and packaged with care and cleanliness.",
    },
    {
      id: 3,
      icon: "./assets/images/features-icon-3.png",
      title: "Skilled Baker",
      description:
        "we combines artistry and precision to craft delicious and beautifully designed treats.",
    },
    {
      id: 4,
      icon: "./assets/images/features-icon-4.png",
      title: "Timely Delivery",
      description:
        "Enjoy the convenience of fresh bakery products delivered straight to your door, right on time.",
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
