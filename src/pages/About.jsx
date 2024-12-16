import React from "react";

const AboutSection = () => {
  return (
    <section
      className="section about text-center bg-black-10"
      aria-labelledby="about-label"
      id="about"
    >
      <div className="container">
        <div className="about-content">
          <p className="slider-reveal-edit" id="about-label">
            Our Story
          </p>
          <h2 className="headline-1 section-title">The Heart of Fresh Bakes</h2>
          <p className="section-text">
            Welcome to our bakery, where passion meets precision to bring you
            the freshest and most delightful baked goods. From the warmth of our
            ovens to the joy of your table, we are dedicated to creating treats
            that satisfy every craving. Our team of skilled bakers uses only the
            finest ingredients, ensuring that every loaf, pastry, and cake is a
            masterpiece of flavor and texture. Whether you're celebrating a
            special occasion or simply indulging in everyday delights, we're
            here to make every moment sweeter. Thank you for letting us be a
            part of your day, one bite at a time.
          </p>

          <div className="contact-label">Get in Touch</div>
          <a
            href="tel:+2348088109416"
            className="body-1 contact-number hover-underline"
          >
            +234 (808) 810 9416
          </a>
          <a href="#contact" className="btn btn-primary">
            <span className="text text-1">Read More</span>
            <span className="text text-2" aria-hidden="true">
              Order Now
            </span>
          </a>
        </div>

        <figure className="about-banner">
          <img
            src="./assets/images/aboutbanner.jpg"
            width="570"
            height="570"
            loading="lazy"
            alt="about banner"
            className="w-100"
            data-parallax-item
            data-parallax-speed="1"
          />
          <div
            className="abs-img abs-img-1 has-before"
            data-parallax-item
            data-parallax-speed="1.75"
          >
            <img
              src="./assets/images/aboutbanner2.jpg"
              width="285"
              height="285"
              loading="lazy"
              alt=""
              className="w-100"
            />
          </div>
        </figure>

        <img
          src="./assets/images/shape-3.png"
          width="197"
          height="194"
          loading="lazy"
          alt=""
          className="shape"
        />
      </div>
    </section>
  );
};

export default AboutSection;
