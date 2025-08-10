import React from "react";
import { Button } from "../../../../components/ui/button";

export const ServicesSection = (): JSX.Element => {
  // Data for pagination indicators
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
  ];

  return (
    <section className="relative w-full h-[600px]">
      {/* Background image with overlay */}
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(../img.png)" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40">
          {/* Content container */}
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="max-w-[608px] mx-auto">
              <h2 className="font-bold text-white text-7xl leading-[70px] mb-6 font-sans">
                Exquisite Silk Sarees
              </h2>

              <p className="font-normal text-white text-3xl leading-8 mb-10 font-sans max-w-[430px] mx-auto">
                Handcrafted with love for generations
              </p>

              <Button className="bg-[#c1272d] hover:bg-[#c1272d]/90 text-white font-normal text-xl px-9 py-4 rounded-md font-sans"
                onClick={() => (window.location.hash = "#collections")}
              >
                Explore Collection
              </Button>
            </div>
          </div>

          {/* Pagination indicators */}
          <div className="absolute bottom-9 left-0 right-0 flex justify-center gap-6">
            {paginationDots.map((dot, index) => (
              <div
                key={index}
                className={`w-3 h-3 bg-white rounded-full ${dot.active ? "" : "opacity-60"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};