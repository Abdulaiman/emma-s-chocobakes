import React from "react";
import Home from "./pages/Home";
import ServiceSection from "./pages/services";
import AboutSection from "./pages/About";
import SpecialDish from "./pages/special";
import Menu from "./pages/menu";
import Reservation from "./pages/testimonials";
import FeaturesSection from "./pages/features";

const App = () => {
  return (
    <div className="mainmain">
      <Home />
      <ServiceSection />
      <AboutSection />
      <SpecialDish />
      <Menu />
      <FeaturesSection />
      <Reservation />
    </div>
  );
};

export default App;
