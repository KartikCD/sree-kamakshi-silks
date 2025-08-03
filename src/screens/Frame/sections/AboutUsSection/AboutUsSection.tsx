import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const AboutUsSection = (): JSX.Element => {
  // Contact form fields data
  const formFields = [
    { id: "name", label: "Your Name", placeholder: "Enter your name" },
    { id: "email", label: "Email Address", placeholder: "Enter your email" },
    {
      id: "phone",
      label: "PhoneIcon Number",
      placeholder: "Enter your phone number",
    },
  ];

  // Contact information data
  const contactInfo = [
    {
      icon: <MapPinIcon className="w-4 h-4" style={{ color: "#C1272D" }} />,
      content:
        "Sree Kamakshi Silks Shop No 16, Neelkanth Commercial Complex, Narayan Gajanan Acharya Marg, Station Road, opp. Sri Krishna Sweets, Chembur, Mumbai, Maharashtra 400071",
      key: "address"
    },
    {
      icon: <PhoneIcon className="w-4 h-4" style={{ color: "#C1272D" }} />,
      content: ["+91 86697 88999", "+91 99699 88999", "022 2521 7732"],
      key: "phonenumber"
    },
    {
      icon: <MailIcon className="w-4 h-4" style={{ color: "#C1272D" }} />,
      content: "sreekamakshisilks@gmail.com",
      key: "email"
    },
    {
      icon: <ClockIcon className="w-4 h-4" style={{ color: "#C1272D" }} />,
      content: [
        "Tuesday - Sunday: 10:00 AM - 8:00 PM"
      ],
    },
  ];

  return (
    <section id="contactUs" className="py-8 sm:py-16 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-8 sm:mb-16 text-center">
          <h2 className="font-bold font-sans text-4xl sm:text-5xl text-[#483d8b] mb-4 sm:mb-6">
            Contact Us
          </h2>
          <p className="font-normal font-sans text-base sm:text-lg text-[#333333] max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for any queries or to
            schedule a visit to our showroom.
          </p>
        </div>

        {/* Contact Form and Info Container */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-12">
          {/* Contact Form */}
          <div className="flex-1">
            <form className="space-y-4 sm:space-y-6">
              {/* Name, Email, PhoneIcon Fields */}
              {formFields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <label
                    htmlFor={field.id}
                    className="block font-sans font-normal text-base sm:text-lg text-[#333333]"
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.id}
                    placeholder={field.placeholder}
                    className="h-[40px] sm:h-[50px] font-sans text-base sm:text-lg border-gray-300 placeholder:text-[#adaebc] min-w-0"
                  />
                </div>
              ))}

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block font-sans font-normal text-base sm:text-lg text-[#333333]"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="h-[120px] sm:h-[146px] font-sans text-base sm:text-lg border-gray-300 placeholder:text-[#adaebc] min-w-0"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-10 sm:h-12 bg-[#c1272d] hover:bg-[#a52024] text-white font-sans font-normal text-base sm:text-lg"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1 space-y-6 sm:space-y-8">
            {/* Showroom Information Card */}
            <Card className="bg-[#9370db1a] border-0">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#483d8b] mb-4 sm:mb-6">
                  Visit Our Showroom
                </h3>

                {/* Contact Details */}
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                      <div className="mt-1 flex-shrink-0">{item.icon}</div>
                      <div className="min-w-0">
                        {Array.isArray(item.content) ? (
                          item.content.map((line, i) => (
                            <p
                              key={i}
                              className="font-sans font-normal text-base sm:text-lg text-[#333333] leading-6 sm:leading-7 break-words"
                            >
                              {(item.key === "address") ? (
                                <a
                                  href="https://maps.app.goo.gl/itVP5HPrAoVtKqbC9"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >{line}</a>
                              ) : item.key === "email" ? (
                                <a
                                  href={`mailto:${line}`}
                                >{line}</a>
                              ) : item.key === "phonenumber" ? (
                                <a
                                  href={`tel:${line.replace(/\s+/g, '')}`}
                                >{line}</a>
                              ) : (
                                line
                              )}
                            </p>
                          ))
                        ) : (
                          <p className="font-sans font-normal text-base sm:text-lg text-[#333333] leading-6 sm:leading-7 break-words">
                            {(item.key === "address") ? (
                              <a
                                href="https://maps.app.goo.gl/itVP5HPrAoVtKqbC9"
                                target="_blank"
                                rel="noopener noreferrer"
                              >{item.content}</a>
                            ) : item.key === "email" ? (
                              <a
                                href={`mailto:${item.content}`}
                              >{item.content}</a>
                            ) : item.key === "phonenumber" ? (
                              <a
                                href={`tel:${item.content.replace(/\s+/g, '')}`}
                              >{item.content}</a>
                            ) : (
                              item.content
                            )}

                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Container */}
            <div className="h-60 sm:h-80 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.049190173205!2d72.89970847544632!3d19.061574752424814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c61fa38fffeb%3A0xbb2ecc39bb6d3413!2sSree%20Kamakshi%20Silks!5e0!3m2!1sen!2sin!4v1748475998635!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen={true}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};