import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import VolunteerSignUp from "./VolunteerSignUp";
import MeetTheFounder from "./MeetTheFounder";
import DonationSection from "./DonationSection";
import SuccessStories from "./SuccessStories";
import Testimonials from "./Testimonial";
import SponsorsPartners from "./Sponsors";
import AboutPage from "./AboutPage";
import Events from "./Events";

import WhatCharityMeans from "./What";
import CharitySection from "./Charity";
import BecomeAPartner from "./Partner";
import HowWeOperate from "./How";
import DidYouKnow from "./DidYouKnow";
import ImpactGallery from "./Impact";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPage />
      <MeetTheFounder />
      <DidYouKnow />
      <CharitySection />
     
      {/* <WhatCharityMeans /> */}
      <AboutSection />
      <HowWeOperate />
      <Events />
      <ImpactGallery />
      <SuccessStories />
      <Testimonials />
      
      <DonationSection />

      <VolunteerSignUp />
      <BecomeAPartner />

      
      <SponsorsPartners />
      <ContactUs />
      <Footer />
    </>
  );
};

export default LandingPage;
