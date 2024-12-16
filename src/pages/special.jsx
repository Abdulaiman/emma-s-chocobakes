import React from "react";

const specialDishes = [
  {
    id: "donut",
    image: "./assets/images/donuts.jpg",
    title: "Glazed Donuts",
    description:
      "Indulge in our soft and delicious glazed donuts, made fresh daily. Perfect for satisfying your sweet tooth or sharing with friends.",
    price: "₦____",
    badge: "./assets/images/badge-1.png",
  },
  {
    id: "cupcake",
    image: "./assets/images/cupcake.jpg",
    title: "Decorative Cupcakes",
    description:
      "Brighten any occasion with our beautifully decorated cupcakes. Made with premium ingredients for a rich, delightful taste.",
    price: "₦____",
    badge: "./assets/images/badge-1.png",
  },
  {
    id: "weddingcake",
    image: "./assets/images/weddingcake.jpg",
    title: "Custom Wedding Cakes",
    description:
      "Make your special day unforgettable with our elegantly designed wedding cakes. Crafted to perfection, they taste as good as they look.",
    price: "₦____",
    badge: "./assets/images/badge-1.png",
  },
  {
    id: "snack",
    image: "./assets/images/snack.jpg",
    title: "Savory Pastries",
    description:
      "Treat yourself to our selection of savory pastries, perfect for breakfast, snacks, or on-the-go meals. Freshly baked to perfection.",
    price: "₦____",
    badge: "./assets/images/badge-1.png",
  },
  {
    id: "cake",
    image: "./assets/images/cake.jpg",
    title: "Delicious Cakes",
    description:
      "Experience the richness of our moist and flavorful cakes. Ideal for birthdays, celebrations, or simply as a sweet treat.",
    price: "₦____",
    badge: "./assets/images/badge-1.png",
  },
  {
    id: "brownie",
    image: "./assets/images/brownie.jpg",
    title: "Fudgy Brownies",
    description:
      "Savor the indulgence of our gooey, fudgy brownies. Made with the finest chocolate for a decadent experience in every bite.",
    price: "₦____",
    badge: "./assets/images/badge-1.png",
  },
];

const SpecialDish = () => {
  return (
    <section
      className="special-dishes"
      aria-labelledby="dishes-label"
      id="special"
    >
      {specialDishes.map((dish, index) => (
        <div
          id={dish.id} // Add unique id for each section
          key={dish.id}
          className={`special-dish ${
            index % 2 === 0 ? "layout-left" : "layout-right"
          }`}
        >
          {index % 2 === 0 ? (
            <>
              {/* Image on the Left */}
              <div className="special-dish-banner">
                <img
                  src={dish.image}
                  width="940"
                  height="900"
                  loading="lazy"
                  alt={dish.title}
                  className="img-cover"
                />
              </div>
              <div className="special-dish-content bg-black-10">
                <div className="container">
                  <img
                    src={dish.badge}
                    width="28"
                    height="41"
                    loading="lazy"
                    alt="badge"
                    className="abs-img"
                  />

                  <p className="slider-reveal-edit">Baked Delights</p>
                  <h2 className="headline-1 section-title">{dish.title}</h2>
                  <p className="section-text">{dish.description}</p>

                  <div className="wrapper">
                    <span className="span body-1">{dish.price}</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Image on the Right */}
              <div className="special-dish-content bg-black-10">
                <div className="container">
                  <img
                    src={dish.badge}
                    width="28"
                    height="41"
                    loading="lazy"
                    alt="badge"
                    className="abs-img"
                  />

                  <p className="slider-reveal-edit">Baked Delights</p>
                  <h2 className="headline-1 section-title">{dish.title}</h2>
                  <p className="section-text">{dish.description}</p>

                  <div className="wrapper">
                    <span className="span body-1">{dish.price}</span>
                  </div>
                </div>
              </div>
              <div className="special-dish-banner">
                <img
                  src={dish.image}
                  width="940"
                  height="900"
                  loading="lazy"
                  alt={dish.title}
                  className="img-cover"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default SpecialDish;
