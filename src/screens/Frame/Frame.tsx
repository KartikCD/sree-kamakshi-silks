import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { ProductGallerySection } from "./sections/ProductGallerySection/ProductGallerySection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Frame = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white border-2 border-solid border-[#ced4da]" id="home">
      <NavigationSection />
      <ServicesSection />
      <ProductGallerySection />
      <MainContentSection />
      <HeroSection />
      <TestimonialsSection />
      <AboutUsSection />
      <ContactSection />
    </div>
  );
};
