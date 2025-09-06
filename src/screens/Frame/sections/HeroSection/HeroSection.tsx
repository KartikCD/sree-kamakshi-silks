import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Service data for mapping
  const services = [
    {
      id: 1,
      icon: "/curated.svg",
      title: "Curated Collections",
      description: [
        "We carefully curate our collections to bring",
        "you the finest silk sarees from various",
        "weaving clusters across India, ensuring",
        "authenticity and quality.",
      ],
    },
    {
      id: 2,
      icon: "/shipping.svg",
      title: "Worldwide Shipping",
      description: [
        "We offer secure and reliable shipping",
        "services worldwide, ensuring your precious",
        "silk sarees reach you in perfect condition.",
      ],
    },
    {
      id: 3,
      icon: "/bridal.svg",
      title: "Bridal Trousseau",
      description: [
        "Our bridal consultants help curate the",
        "perfect trousseau collection, including",
        "wedding sarees, reception outfits, and family",
        "ensembles.",
      ],
    },
    {
      id: 4,
      icon: "/authenticity.svg",
      title: "Authenticity Certificate",
      description: [
        "Each premium silk saree comes with a",
        "certificate of authenticity, detailing the",
        "origin, silk type, and craftsmanship",
        "techniques used.",
      ],
    },
  ];

  return (
    <section id="services" className="py-16 px-4 flex justify-center items-center bg-white">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-[#483d8b] mb-6 font-sans">
            Our Services
          </h2>
          <p className="text-xl text-[#333333] max-w-xl mx-auto font-sans">
            We offer a range of services to ensure you find the perfect silk
            saree for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.id}
              className="rounded-lg border-t-4 border-[#c1272d] shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] border-t-solid border-x-0 border-b-0 transition-all duration-300 hover:shadow-xl text-center"
            >
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="flex w-10 h-9 items-center justify-center">
                    <img
                      className="w-auto h-9"
                      alt={service.title}
                      src={service.icon}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#483d8b] mb-6 font-sans">
                  {service.title}
                </h3>

                <div className="text-[#333333] text-xl font-sans">
                  {service.description.map((line, index) => (
                    <p key={index} className="mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
