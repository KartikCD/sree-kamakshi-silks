import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { useState } from "react";

export const AboutUsSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact form fields data
  const formFields = [
    { id: "name", label: "Your Name", placeholder: "Enter your name" },
    { id: "email", label: "Email Address", placeholder: "Enter your email" },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "Enter your phone number",
    },
  ];

  // Contact information data
  const contactInfo = [
    {
      icon: <MapPinIcon className="w-4 h-4" style={{ color: "#C1272D" }} />,
      content:
        "Sree Kamakshi Silks Shop No 16, Neelkanth Commercial Complex, Narayan Gajanan Acharya Marg, Station Road, opp. Sri Krishna Sweets, Chembur, Mumbai, Maharashtra 400071",
      key: "address",
    },
    {
      icon: <PhoneIcon className="w-4 h-4" style={{ color: "#C1272D" }} />,
      content: ["+91 86697 88999", "+91 99699 88999", "022 2521 7732"],
      key: "phonenumber",
    },
    {
      icon: <MailIcon className="w-4 h-4" style={{ color: "#C1272D" }} />,
      content: "sreekamakshisilks13@gmail.com",
      key: "email",
    },
    {
      icon: <ClockIcon className="w-4 h-4" style={{ color: "#C1272D" }} />,
      content: ["Tuesday - Sunday: 10:00 AM - 8:00 PM"],
    },
  ];

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    // Email validation (optional but must be valid if provided)
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const now = new Date();

    const date = now.toLocaleDateString("en-IN"); // Example: 10/08/2025

    // Current time with AM/PM
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    }); // Example: 7:35:20 PM

    try {
      // Google Sheets integration
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzITFdTiJVy5tHLdoRg0y6u2jD7pn4CYxPr1vWo_n6iMrUkWb1rLM9Hz2qT6lQL5mffNg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            date: date,
            time: time,
          }),
        }
      );

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      alert("Thank you! Your message has been sent successfully.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactUs" className="py-8 sm:py-16 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-8 sm:mb-16 text-center">
          <h2 className="font-bold font-sans text-5xl sm:text-6xl text-[#483d8b] mb-4 sm:mb-6">
            Contact Us
          </h2>
          <p className="font-normal font-sans text-lg sm:text-xl text-[#333333] max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for any queries or to
            schedule a visit to our showroom.
          </p>
        </div>

        {/* Contact Form and Info Container */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-12">
          {/* Contact Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name, Email, PhoneIcon Fields */}
              {formFields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <label
                    htmlFor={field.id}
                    className="block font-sans font-normal text-lg sm:text-xl text-[#333333]"
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) =>
                      handleInputChange(field.id, e.target.value)
                    }
                    placeholder={field.placeholder}
                    className={`h-[45px] sm:h-[55px] font-sans text-lg sm:text-xl border-gray-300 placeholder:text-[#adaebc] min-w-0 ${
                      errors[field.id as keyof typeof errors]
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {errors[field.id as keyof typeof errors] && (
                    <p className="text-red-500 text-sm font-sans">
                      {errors[field.id as keyof typeof errors]}
                    </p>
                  )}
                </div>
              ))}

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block font-sans font-normal text-lg sm:text-xl text-[#333333]"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="How can we help you?"
                  className={`h-[130px] sm:h-[156px] font-sans text-lg sm:text-xl border-gray-300 placeholder:text-[#adaebc] min-w-0 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm font-sans">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 sm:h-14 bg-[#c1272d] hover:bg-[#a52024] disabled:bg-gray-400 text-white font-sans font-normal text-lg sm:text-xl"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1 space-y-6 sm:space-y-8">
            {/* Showroom Information Card */}
            <Card className="bg-[#9370db1a] border-0">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#483d8b] mb-4 sm:mb-6">
                  Visit Our Showroom
                </h3>

                {/* Contact Details */}
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="mt-1 flex-shrink-0">{item.icon}</div>
                      <div className="min-w-0">
                        {Array.isArray(item.content) ? (
                          item.content.map((line, i) => (
                            <p
                              key={i}
                              className="font-sans font-normal text-lg sm:text-xl text-[#333333] leading-7 sm:leading-8 break-words"
                            >
                              {item.key === "address" ? (
                                <a
                                  href="https://maps.app.goo.gl/itVP5HPrAoVtKqbC9"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {line}
                                </a>
                              ) : item.key === "email" ? (
                                <a href={`mailto:${line}`}>{line}</a>
                              ) : item.key === "phonenumber" ? (
                                <a href={`tel:${line.replace(/\s+/g, "")}`}>
                                  {line}
                                </a>
                              ) : (
                                line
                              )}
                            </p>
                          ))
                        ) : (
                          <p className="font-sans font-normal text-lg sm:text-xl text-[#333333] leading-7 sm:leading-8 break-words">
                            {item.key === "address" ? (
                              <a
                                href="https://maps.app.goo.gl/itVP5HPrAoVtKqbC9"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {item.content}
                              </a>
                            ) : item.key === "email" ? (
                              <a href={`mailto:${item.content}`}>
                                {item.content}
                              </a>
                            ) : item.key === "phonenumber" ? (
                              <a
                                href={`tel:${item.content.replace(/\s+/g, "")}`}
                              >
                                {item.content}
                              </a>
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
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
