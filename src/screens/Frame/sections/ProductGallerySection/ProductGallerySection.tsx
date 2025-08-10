import React, { useMemo, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  badge?: string;
};

// Product data for mapping
const products: Product[] = [
  {
    id: 1,
    name: "Kanchipuram Silk Saree",
    description: "Pure Silk with Gold Zari Border",
    image: "url(/img-3.png)",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Royal Purple Silk",
    description: "Silver Zari with Floral Design",
    image: "url(/img-4.png)",
  },
  {
    id: 3,
    name: "Bridal Collection",
    description: "Maroon with Heavy Gold Work",
    image: "url(/img-5.png)",
    badge: "New Arrival",
  },
  {
    id: 4,
    name: "Peacock Motif Silk",
    description: "Teal Blue with Traditional Design",
    image: "url(/img-6.png)",
  },
];

export const ProductGallerySection = (): JSX.Element => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const whatsappNumber = useMemo(() => "919969988999", []); // 9969988999 with country code 91

  const handleBuyNow = (productName: string) => {
    const message = `Hi! I'm interested in buying the ${productName}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const openDetails = (product: Product) => setSelectedProduct(product);
  const closeDetails = () => setSelectedProduct(null);

  return (
    <section className="w-full bg-white py-10 sm:py-18">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-bold text-5xl sm:text-6xl text-[#483d8b] mb-5 sm:mb-7 font-sans">
            Our Most Popular Sarees
          </h2>
          <p className="text-lg sm:text-xl text-[#333333] max-w-2xl mx-auto font-sans">
            Discover our bestselling silk sarees, each piece showcasing
            exquisite craftsmanship and timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 mb-10 sm:mb-14">
          {products.map((product) => (
            <Card
              key={product.id}
              className="rounded-lg overflow-hidden shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] border-0 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div
                className="h-72 sm:h-80 relative cursor-pointer"
                style={{ background: `${product.image} 50% 50% / cover` }}
                onClick={() => openDetails(product)}
              >
                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#c1272d] text-white rounded-full px-3 py-1 font-normal text-xs sm:text-sm font-sans">
                      {product.badge}
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-xl sm:text-2xl text-[#483d8b] mb-2 font-sans line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-lg sm:text-xl text-[#333333] mb-4 font-sans line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-center">
                  <Button
                    onClick={() => handleBuyNow(product.name)}
                    className="w-full bg-[#483d8b] text-white rounded-md hover:bg-[#3a3171] font-sans text-lg sm:text-xl transition-all duration-200"
                  >
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button onClick={() => (window.location.hash = "#collections")} className="bg-[#c1272d] text-white px-7 sm:px-9 py-3 sm:py-3.5 rounded-md hover:bg-[#a11f25] font-sans text-lg sm:text-xl w-full sm:w-auto">
            View All Collections
          </Button>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={closeDetails}>
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="h-64 sm:h-80" style={{ background: `${selectedProduct.image} 50% 50% / cover` }} />
            <div className="p-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#483d8b] mb-2 font-sans">{selectedProduct.name}</h3>
              <p className="text-lg sm:text-xl text-[#333333] mb-5 font-sans">{selectedProduct.description}</p>
              <div className="flex gap-3 justify-end">
                <Button variant="outline" className="border-2 border-[#483d8b] text-[#483d8b] hover:bg-[#483d8b]/10 text-lg sm:text-xl font-sans" onClick={closeDetails}>Close</Button>
                <Button className="bg-[#c1272d] text-white text-lg sm:text-xl font-sans" onClick={() => handleBuyNow(selectedProduct.name)}>Buy Now</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};