import React from "react";

const Menu = () => {
  const menuItems = [
    {
      image: "./assets/images/rice.png", // Add your rice image here
      alt: "Rice",
      title: "Premium Rice",
      description: "High-quality rice, perfect for any dish.",
      price: "₦4200",
    },
    {
      image: "./assets/images/beans.png", // Add your beans image here
      alt: "Beans",
      title: "Premium Beans",
      description: "Fresh and nutritious beans for all your meals.",
      price: "₦4200",
    },
  ];

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="slider-reveal-edit text-center">Special Selection</p>
        <h2 className="headline-1 section-title text-center">Our Items</h2>

        <ul className="grid-list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <div className="menu-card hover:card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 100, "--height": 100 }}
                >
                  {/* <img
                    src={item.image}
                    width="100"
                    height="100"
                    loading="lazy"
                    alt={item.alt}
                    className="img-cover"
                  /> */}
                </figure>

                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="#" className="card-title">
                        {item.title}
                      </a>
                    </h3>

                    <span className="span title-2">{item.price}</span>
                  </div>

                  <p className="card-text label-1">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="menu-text text-center">Daily 24/7</p>
        {/* 
        <a href="#" className="btn btn-primary">
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">
            View All Menu
          </span>
        </a> */}

        <img
          src="./assets/images/shape-5.png"
          width="921"
          height="1036"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
        <img
          src="./assets/images/shape-6.png"
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-3 move-anim"
        />
      </div>
    </section>
  );
};

export default Menu;
