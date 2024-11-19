import React from "react";
import LandingBanner from "./LandingBanner";

import Partners from "./Partners";
import WhyPlanet from "./WhyPlanet";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <LandingBanner />

      <Partners />

      <WhyPlanet />
      <Testimonial />
      <Footer />
    </>
  );
};

export default LandingPage;
