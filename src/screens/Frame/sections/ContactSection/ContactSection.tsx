import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

export const ContactSection = (): JSX.Element => {
  // Company information
  const companyInfo = {
    description:
      "Welcome to SREE KAMAKSHI SILKS, your number one source for Best Handlooom Silk Saares. We're dedicated to giving you the very best of our products, with a focus on dependability, customer service and uniqueness.",
  };

  // Quick links data
  const quickLinks = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "#aboutUs" },
    { title: "Services", link: "#services" },
    { title: "Reviews", link: "#reviews" },
    { title: "Contact", link: "#contactUs" },
  ];

  return (
    <footer className="w-full bg-[#483d8b] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Company Info Column */}
          <div className="flex flex-col space-y-6">
            <div className="bg-white p-2 rounded-lg w-16 h-16 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Sree Kamakshi Silks Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="font-normal text-white text-lg leading-6">
              {companyInfo.description}
            </p>

            <div className="flex space-x-6">
              <FacebookIcon className="w-5 h-5 text-white transition-all duration-200 hover:text-[#c1272d] cursor-pointer" />
              <TwitterIcon className="w-5 h-5 text-white transition-all duration-200 hover:text-[#c1272d] cursor-pointer" />
              <InstagramIcon className="w-5 h-5 text-white transition-all duration-200 hover:text-[#c1272d] cursor-pointer" />
              <YoutubeIcon className="w-5 h-5 text-white transition-all duration-200 hover:text-[#c1272d] cursor-pointer" />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-white text-xl leading-6">
              Quick Links
            </h3>

            <div className="flex flex-col space-y-4 mt-4">
              {quickLinks.map((link, index) => (
                <div key={index} className="h-6">
                  <div className="font-normal text-white text-lg leading-6 transition-all duration-200 hover:text-[#c1272d]">
                    <a href={link.link}>{link.title}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collections Column */}
          {/* <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-white text-lg leading-[18px]">
              Collections
            </h3>

            <div className="flex flex-col space-y-4 mt-4">
              {collections.map((collection, index) => (
                <div key={index} className="h-6">
                  <div className="font-normal text-white text-base leading-4">
                    {collection.title}
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Legal Column */}
          {/* <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-white text-lg leading-[18px]">
              Legal
            </h3>

            <div className="flex flex-col space-y-4 mt-4">
              {legalLinks.map((link, index) => (
                <div key={index} className="h-6">
                  <div className="font-normal text-white text-base leading-4">
                    {link.title}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-[#9370db] flex justify-center">
          <div className="font-normal text-white text-lg text-center leading-6">
            © 2025 Sree Kamakshi Silks. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
