import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Product data for mapping
const products = [
  {
    id: 1,
    name: "Kanchipuram Silk Saree",
    description: "Pure Silk with Gold Zari Border",
    image: "url(..//img-3.png)",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Royal Purple Silk",
    description: "Silver Zari with Floral Design",
    image: "url(..//img-4.png)",
    badge: "",
  },
  {
    id: 3,
    name: "Bridal Collection",
    description: "Maroon with Heavy Gold Work",
    image: "url(..//img-5.png)",
    badge: "New Arrival",
  },
  {
    id: 4,
    name: "Peacock Motif Silk",
    description: "Teal Blue with Traditional Design",
    image: "url(..//img-6.png)",
    badge: "",
  },
];

export const ProductGallerySection = (): JSX.Element => {
  const handleBuyNow = (productName: string) => {
    const message = `Hi! I'm interested in buying the ${productName}. Could you please provide more details?`;
    const phoneNumber = "+919669988999"; // Replace with your actual phone number
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="w-full bg-white py-8 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-bold text-4xl sm:text-5xl text-[#483d8b] mb-4 sm:mb-6 font-sans">
            Our Most Popular Sarees
          </h2>
          <p className="text-base sm:text-lg text-[#333333] max-w-2xl mx-auto font-sans">
            Discover our bestselling silk sarees, each piece showcasing
            exquisite craftsmanship and timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="rounded-lg overflow-hidden shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] border-0 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div
                className="h-64 sm:h-80 relative"
                style={{ background: `${product.image} 50% 50% / cover` }}
              >
                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#c1272d] text-white rounded-full px-3 py-1 font-normal text-xs sm:text-sm font-sans">
                      {product.badge}
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-normal text-lg sm:text-xl text-[#483d8b] mb-2 font-sans line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-base sm:text-lg text-[#333333] mb-4 font-sans line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-center">
                  <Button 
                    onClick={() => handleBuyNow(product.name)}
                    className="w-full bg-[#483d8b] text-white rounded-md hover:bg-[#3a3171] font-sans text-base sm:text-lg transition-all duration-200"
                  >
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-[#c1272d] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-[#a11f25] font-sans text-base sm:text-lg w-full sm:w-auto">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};