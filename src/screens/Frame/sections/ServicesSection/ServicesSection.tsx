import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const ServicesSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel slides data
  const slides = [
    {
      image: "../img.png",
      title: "Exquisite Silk Sarees",
      subtitle: "Handcrafted with love for generations"
    },
    {
      image: "../img-3.png",
      title: "Traditional Kanchipuram",
      subtitle: "Pure silk with authentic gold zari work"
    },
    {
      image: "../img-4.png",
      title: "Royal Banarasi Collection",
      subtitle: "Heritage weaving from the holy city"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleExploreCollection = () => {
    navigate('/collections');
  };

  return (
    <section className="relative w-full h-[600px]">
      {/* Background image with overlay */}
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40">
          {/* Content container */}
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="max-w-[608px] mx-auto">
              <h2 className="font-bold text-white text-8xl leading-[80px] mb-6 font-sans transition-all duration-500">
                {slides[currentSlide].title}
              </h2>

              <p className="font-normal text-white text-4xl leading-10 mb-10 font-sans max-w-[430px] mx-auto transition-all duration-500">
                {slides[currentSlide].subtitle}
              </p>

              <Button 
                onClick={handleExploreCollection}
                className="bg-[#c1272d] hover:bg-[#c1272d]/90 text-white font-normal text-xl px-10 py-4 rounded-md font-sans"
              >
                Explore Collection
              </Button>
            </div>
          </div>

          {/* Pagination indicators */}
          <div className="absolute bottom-9 left-0 right-0 flex justify-center gap-6">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 bg-white rounded-full cursor-pointer transition-opacity duration-300 ${
                  index === currentSlide ? "" : "opacity-60"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};