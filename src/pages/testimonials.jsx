import React from "react";

const Testimonial = () => {
  return (
    <section
      className="section testi text-center has-bg-image"
      style={{ backgroundImage: "url('./assets/images/testimonial-bg.jpg')" }}
      aria-label="testimonials"
    >
      <div className="container">
        <div className="quote">”</div>
        <p className="headline-2 testi-text">
          Great quality rice and beans at affordable prices! Perfect for
          students. Fast delivery and excellent service. Highly recommend!
        </p>
        <div className="wrapper">
          <div className="separator"></div>
          <div className="separator"></div>
          <div className="separator"></div>
        </div>
        <div className="profile">
          <img
            src="./assets/images/aiman.jpg"
            width="100"
            height="100"
            loading="lazy"
            alt="Sam Jhonson"
            className="img"
          />
          <p className="label-2 profile-name">Aiman</p>
        </div>
      </div>
    </section>
  );
};

const Reservation = () => {
  return (
    <>
      <Testimonial />
      <section className="reservation" id="contact">
        <div className="container">
          <div className="form reservation-form bg-black-10">
            <form action="" className="form-left">
              <h2 className="headline-1 text-center">Online Order</h2>
              <p className="form-text text-center">
                Booking request{" "}
                <a href="tel:+2347085536471" className="link">
                  +234-708-553-6471
                </a>{" "}
                or fill out the order form
              </p>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="off"
                  className="input-field"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  autoComplete="off"
                  className="input-field"
                />
              </div>
              <div className="input-wrapper">
                <div className="icon-wrapper">
                  <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                  <select name="person" className="input-field">
                    {Array.from({ length: 7 }, (_, i) => (
                      <option key={i + 1} value={`${i + 1}-unit`}>
                        {i + 1} unit
                      </option>
                    ))}
                  </select>
                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>
                <div className="icon-wrapper">
                  <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                  <select name="person" className="input-field">
                    <option key={"Rice"} value={"Rice"}>
                      Rice
                    </option>
                    <option key={"Beans"} value={"Beans"}>
                      Beans
                    </option>
                  </select>
                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>
                <div className="icon-wrapper">
                  <ion-icon
                    name="calendar-clear-outline"
                    aria-hidden="true"
                  ></ion-icon>
                  <input
                    type="date"
                    name="reservation-date"
                    className="input-field"
                  />
                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>
              </div>
              <textarea
                name="message"
                placeholder="Message"
                autoComplete="off"
                className="input-field"
              ></textarea>
              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Place Your Order</span>
                <span className="text text-2" aria-hidden="true">
                  Book A Table
                </span>
              </button>
            </form>
            <div
              className="form-right text-center"
              style={{
                backgroundImage: "url('./assets/images/form-pattern.png')",
              }}
            >
              <h2 className="headline-1 text-center">Contact Us</h2>
              <p className="contact-label">Booking Request</p>
              <a
                href="tel:+2347085536471"
                className="body-1 contact-number hover-underline"
              >
                +234-708-553-6471
              </a>
              <div className="separator"></div>
              <p className="contact-label">Location</p>
              <address className="body-4">
                Room 23, Block K, Bayero University Kano <br />
                Kano State, Nigeria
              </address>
              {/* <p className="contact-label">Lunch Time</p>
              <p className="body-4">
                Monday to Sunday <br />
                11.00 am - 2.30pm
              </p> */}
              {/* <p className="contact-label">Dinner Time</p>
              <p className="body-4">
                Monday to Sunday <br />
                05.00 pm - 10.00pm
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
