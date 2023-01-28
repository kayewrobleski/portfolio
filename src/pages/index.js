import React from "react";
import {
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Kaye Wrobleski Personal Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <InterestsSection sectionId="details" heading="My Interests" />
        <ContactSection sectionId="contact" heading="Contact Me" />
      </Page>
    </>
  );
}
