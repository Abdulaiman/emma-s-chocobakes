import React, { useState, useEffect } from "react";

const Home = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);
  const [isHeaderActive, setHeaderActive] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true); // Hide preloader after 3 seconds
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  // Navbar toggle
  const toggleNavbar = () => {
    setNavbarActive(!isNavbarActive);
    document.body.classList.toggle("nav-active");
  };

  // Header hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 50) {
        setHeaderActive(true);
        if (scrollTop > lastScrollPos) {
          document.querySelector("[data-header]").classList.add("hide");
        } else {
          document.querySelector("[data-header]").classList.remove("hide");
        }
      } else {
        setHeaderActive(false);
      }
      setLastScrollPos(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  // Hero slider functionality
  const slideNext = () => {
    setCurrentSlidePos(currentSlidePos >= 2 ? 0 : currentSlidePos + 1);
  };

  const slidePrev = () => {
    setCurrentSlidePos(currentSlidePos <= 0 ? 2 : currentSlidePos - 1);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 7000);
    setAutoSlideInterval(interval);
    return () => clearInterval(interval);
  }, [currentSlidePos]);

  return (
    <div>
      {/* PRELOADER */}
      {!isLoaded && (
        <div className={`preload ${isLoaded ? "loaded" : ""}`}>
          <div className="circle"></div>
          <p className="text loading-text">Emma's Chocobakes</p>
        </div>
      )}
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">Bayero University Kano</span>
          </address>
          <div className="separator"></div>
          <div className="topbar-item item-2">
            <div className="icon">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">Daily : 24/7</span>
          </div>
          <a href="tel:+2348088109416" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">+234 808 810 9416</span>
          </a>
          <div className="separator"></div>
          <a href="emmaschocobakes@gmail.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">emmaschocobakes@gmail.com</span>
          </a>
        </div>
      </div>

      {/* HEADER */}
      <header
        className={`header ${isHeaderActive ? "active" : ""}`}
        data-header
      >
        <div className="container">
          <a href="#" className="logo">
            <img
              src="./assets/images/logo.svg"
              width="160"
              height="50"
              alt="Grilli - Home"
            />
          </a>
          <nav
            className={`navbar ${isNavbarActive ? "active" : ""}`}
            data-navbar
          >
            <button
              className="close-btn"
              aria-label="close menu"
              onClick={toggleNavbar}
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
            <a href="#" className="logo">
              <img
                src="./assets/images/logo.svg"
                width="160"
                height="50"
                alt="Grilli - Home"
              />
            </a>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a
                  href="#home"
                  className="navbar-link hover-underline active"
                  onClick={toggleNavbar}
                >
                  <div className="separator"></div>
                  <span className="span">Home</span>
                </a>
              </li>
              <li className="navbar-item">
                <a
                  href="#special"
                  className="navbar-link hover-underline"
                  onClick={toggleNavbar}
                >
                  <div className="separator"></div>
                  <span className="span">Delights</span>
                </a>
              </li>
              <li className="navbar-item">
                <a
                  href="#about"
                  className="navbar-link hover-underline"
                  onClick={toggleNavbar}
                >
                  <div className="separator"></div>
                  <span className="span">About Us</span>
                </a>
              </li>
              {/* <li className="navbar-item">
                <a href="#" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Our Chefs</span>
                </a>
              </li> */}
              <li className="navbar-item">
                <a
                  href="#contact"
                  className="navbar-link hover-underline"
                  onClick={toggleNavbar}
                >
                  <div className="separator"></div>
                  <span className="span">Contact</span>
                </a>
              </li>
            </ul>
            <div className="text-center">
              <p className="headline-1 navbar-title">Visit Us</p>
              <address className="body-4">
                Bayero University Kano <br />
                Kano State, Nigeria
              </address>
              {/* <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p> */}
              <a
                href="emmaschocobakes@gmail.com"
                className="body-4 sidebar-link"
              >
                emmaschocobakes@gmail.com
              </a>
              <div className="separator"></div>
              <p className="contact-label">Booking Request</p>
              <a
                href="tel:+2348088109416"
                className="body-1 contact-number hover-underline"
              >
                +234 (808) 810 9416
              </a>
            </div>
          </nav>
          <a href="#contact" className="btn btn-secondary">
            <span className="text text-1">Place An Order</span>
            <span className="text text-2" aria-hidden="true">
              Place An Order
            </span>
          </a>
          <button
            className="nav-open-btn"
            aria-label="open menu"
            onClick={toggleNavbar}
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>
          <div
            className="overlay"
            data-nav-toggler
            data-overlay
            onClick={toggleNavbar}
          ></div>
        </div>
      </header>

      {/* HERO SLIDER */}
      <section className="hero text-center" aria-label="home" id="home">
        <ul className="slider" data-hero-slider>
          <li
            className={`slider-item ${currentSlidePos === 0 ? "active" : ""}`}
            data-hero-slider-item
          >
            <div className="slider-bg">
              <img
                src="./assets/images/hero-slider-1.jpg"
                width="1880"
                height="950"
                alt="Freshly baked cakes"
                className="img-cover"
              />
            </div>
            <p className="slider-reveal-edit">Affordable and Tasty</p>
            <h1 className="display-1 hero-title slider-reveal">
              Enjoy Quality Treats <br /> That Won't Break the Bank
            </h1>
            <p className="body-2 hero-text slider-reveal">
              Our cakes, cookies, and pastries are baked with love and offered
              at the best prices.
            </p>
            <a href="#contact" className="btn btn-primary slider-reveal">
              <span className="text text-1">Buy Now</span>
              <span className="text text-2" aria-hidden="true">
                Buy Now
              </span>
            </a>
          </li>
          <li
            className={`slider-item ${currentSlidePos === 1 ? "active" : ""}`}
            data-hero-slider-item
          >
            <div className="slider-bg">
              <img
                src="./assets/images/hero-slider-2.jpg"
                width="1880"
                height="950"
                alt="Affordable bakery treats"
                className="img-cover"
              />
            </div>
            <p className="slider-reveal-edit">Delicious and Fresh Bakes</p>
            <h1 className="display-1 hero-title slider-reveal">
              Indulge in <br /> Freshly Baked Goodness
            </h1>
            <p className="body-2 hero-text slider-reveal">
              From soft cakes to buttery pastries, we deliver freshly baked
              treats every day.
            </p>

            <a href="#contact" className="btn btn-primary slider-reveal">
              <span className="text text-1">Order Now</span>
              <span className="text text-2" aria-hidden="true">
                Order Now
              </span>
            </a>
          </li>
          <li
            className={`slider-item ${currentSlidePos === 2 ? "active" : ""}`}
            data-hero-slider-item
          >
            <div className="slider-bg">
              <img
                src="./assets/images/hero-slider-3.jpg"
                width="1880"
                height="950"
                alt="Fresh bakery delivery"
                className="img-cover"
              />
            </div>
            <p className="slider-reveal-edit">Convenient Delivery</p>
            <h1 className="display-1 hero-title slider-reveal">
              Freshly Baked <br /> Delivered to Your Doorstep
            </h1>
            <p className="body-2 hero-text slider-reveal">
              Get cakes, snacks, and desserts delivered warm and fresh straight
              to you.
            </p>
            <a href="#contact" className="btn btn-primary slider-reveal">
              <span className="text text-1">Buy Now</span>
              <span className="text text-2" aria-hidden="true">
                Buy Now
              </span>
            </a>
          </li>
        </ul>

        <button className="slider-arrow slider-arrow-prev" onClick={slidePrev}>
          <ion-icon name="chevron-back-outline" aria-hidden="true"></ion-icon>
        </button>
        <button className="slider-arrow slider-arrow-next" onClick={slideNext}>
          <ion-icon
            name="chevron-forward-outline"
            aria-hidden="true"
          ></ion-icon>
        </button>
      </section>
    </div>
  );
};

export default Home;
