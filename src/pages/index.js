import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        {/* <AboutSection sectionId="about" heading="About Portfolio Minimal" /> */}
        <InterestsSection sectionId="interests" heading="Interests" />
        {/* <ProjectsSection sectionId="features" heading="Built-in Features" /> */}
        <ContactSection sectionId="contact" heading="Contact Me" />
      </Page>
    </>
  );
}
