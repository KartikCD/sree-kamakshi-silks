import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  const getYearsDifference = () => {
    const inputDate = new Date("2013-12-12");
    const today = new Date();

    let years = today.getFullYear() - inputDate.getFullYear();

    if (
      today.getMonth() < inputDate.getMonth() ||
      (today.getMonth() === inputDate.getMonth() &&
        today.getDate() < inputDate.getDate())
    ) {
      years--;
    }

    return years;
  };

  return (
    <section
      id="aboutUs"
      className="w-full bg-[#9370db1a] py-8 md:py-12 lg:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-7 lg:space-y-8">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#483d8b] font-sans leading-tight md:leading-tight lg:leading-10">
              About Sree Kamakshi Silks
            </h2>

            <div className="space-y-4 md:space-y-5 lg:space-y-6">
              <p className="text-base md:text-lg lg:text-xl text-[#333333] font-normal leading-relaxed md:leading-7 lg:leading-8 font-sans">
                Welcome to SREE KAMAKSHI SILKS, your number one source for Best
                Handlooom Silk Saares. We're dedicated to giving you the very
                best of our products, with a focus on dependability, customer
                service and uniqueness.
              </p>

              <p className="text-base md:text-lg lg:text-xl text-[#333333] font-normal leading-relaxed md:leading-7 lg:leading-8 font-sans">
                Founded in DECEMBER 12 2013 by M G Mohanraam, Sree Kamakshi
                Silks has come a long way from its beginnings. We now serve
                customers all over the globe, and are thrilled to be a part of
                the eco-friendly and fair trade wing of the handloom industry.
                We hope you enjoy our products as much as we enjoy offering them
                to you. If you have any questions or comments, please don't
                hesitate to contact us.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                className="w-full sm:w-auto bg-[#483d8b] text-white hover:bg-[#483d8b]/90 text-base md:text-lg lg:text-xl font-sans px-6 md:px-8 py-2 md:py-3"
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Our Services
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("contactUs");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto border-2 border-[#483d8b] text-[#483d8b] hover:bg-[#483d8b]/10 text-base md:text-lg lg:text-xl font-sans px-6 md:px-8 py-2 md:py-3"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <Card className="w-full h-[400px] sm:h-[600px] rounded-lg overflow-hidden shadow-[0px_20px_25px_#0000001a,0px_8px_10px_#0000001a] border-0">
              <Card className="w-full h-[350px] md:h-[450px] lg:h-[600px] rounded-lg overflow-hidden shadow-[0px_20px_25px_#0000001a,0px_8px_10px_#0000001a] border-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url(../ceo.JPG)" }}
                />
              </Card>
            </Card>

            <div className="absolute -bottom-3 md:-bottom-4 left-3 md:left-4 bg-[#c1272d] rounded-lg p-3 md:p-4 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] text-white">
              <p className="font-bold text-base md:text-lg lg:text-xl font-sans">{`${getYearsDifference()}+ Years`}</p>
              <p className="text-base md:text-lg lg:text-xl font-sans">
                of Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
