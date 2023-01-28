import React from "react";
import {
  ContactSection,
  HeroSection,
  InterestsSection,
  ProjectsSection,
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
        <ProjectsSection sectionId="projects" heading="Personal Projects" />
        <ContactSection sectionId="contact" heading="Contact Me" />
      </Page>
    </>
  );
}
