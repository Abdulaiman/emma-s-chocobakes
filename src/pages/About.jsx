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
          <h2 className="headline-1 section-title">
            Fresh Grains, Quality Guaranteed
          </h2>
          <p className="section-text">
            We are a campus-based supplier committed to providing high-quality
            grains like rice, beans, and more, straight from the farm to your
            doorstep. Our mission is to offer students and staff access to
            fresh, nutritious grains at affordable prices, making it easier to
            fuel your academic journey and daily life. With a focus on quality,
            sustainability, and community, we ensure that every grain you
            purchase is carefully sourced and packed with care. Join us in
            supporting local farmers while enjoying fresh, reliable products
            that meet your dietary needs.
          </p>
          <div className="contact-label">Get in Touch</div>
          <a
            href="tel:+2347085536471"
            className="body-1 contact-number hover-underline"
          >
            +234 (708) 553 6471
          </a>
          <a href="#" className="btn btn-primary">
            <span className="text text-1">Read More</span>
            <span className="text text-2" aria-hidden="true">
              Read More
            </span>
          </a>
        </div>

        <figure className="about-banner">
          <img
            src="./assets/images/about-banner.jpg"
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
              src="./assets/images/about-abs-image.jpg"
              width="285"
              height="285"
              loading="lazy"
              alt=""
              className="w-100"
            />
          </div>
          {/* <div className="abs-img abs-img-2 has-before">
            <img
              src="./assets/images/badge-2.jpg"
              width="133"
              height="134"
              loading="lazy"
              alt=""
            />
          </div> */}
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
