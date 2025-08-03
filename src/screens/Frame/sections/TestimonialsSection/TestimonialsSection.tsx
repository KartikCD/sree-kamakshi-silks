import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "..//img-8.png",
    rating: 5,
    testimonial:
      "\"I purchased a Kanchipuram silk saree for my daughter's wedding from Shree Kamakshi Silks, and I couldn't be happier with the quality and design. The saree received countless compliments, and the customer service was exceptional.",
  },
  {
    id: 2,
    name: "Anita Desai",
    image: "..//img-9.png",
    rating: 4.5,
    testimonial:
      '"The custom bridal collection they created for me was beyond my expectations. Each piece was unique and exquisitely crafted. The personal attention to detail and the guidance in selecting the right sarees made all the difference."',
  },
  {
    id: 3,
    name: "Rajesh Patel",
    image: "..//img-10.png",
    rating: 5,
    testimonial:
      '"I ordered a silk saree online for my wife\'s birthday, and I was impressed with the quick delivery and the quality of the product. The saree looked even better in person than in the photos. Will definitely shop here again!"',
  },
  {
    id: 4,
    name: "Meena Iyer",
    image: "..//img-11.png",
    rating: 5,
    testimonial:
      '"As someone who lives abroad, I was hesitant to purchase expensive silk sarees online. But Shree Kamakshi Silks made the process seamless. The sarees arrived beautifully packaged and were exactly as described. The authenticity certificate was a nice touch."',
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section id="reviews" className="py-16 bg-[#e573731a]">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-5xl text-[#483d8b] mb-4 font-sans">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#333333] font-sans">
            Hear from our satisfied customers about their experience with Sree
            Kamakshi Silks.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/3 lg:basis-1/3"
              >
                <Card className="h-[280px] bg-white shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] rounded-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <Avatar className="h-12 w-12 rounded-full">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <h3 className="font-bold text-lg text-[#483d8b] font-sans">
                          {testimonial.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-[#333333] font-sans">
                      {testimonial.testimonial}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="w-7 h-9 rounded-full bg-white shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] left-0">
            <img
              className="w-[12.5px] h-5"
              alt="Previous"
              src="/frame-35.svg"
            />
          </CarouselPrevious>
          <CarouselNext className="w-7 h-9 rounded-full bg-white shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] right-0">
            <img className="w-[12.5px] h-5" alt="Next" src="/frame-15.svg" />
          </CarouselNext>
        </Carousel>
        </div>
    </section>
  );
};
