import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ProductModal } from "../../../../components/ProductModal";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  badge?: string;
  fullDescription?: string;
  features?: string[];
  origin?: string;
  fabric?: string;
  care?: string;
}

// Product data for mapping
const products: Product[] = [
  {
    id: 1,
    name: "Kanchipuram Silk Saree",
    description: "Pure Silk with Gold Zari Border",
    image: "url(..//img-3.png)",
    badge: "Bestseller",
    fullDescription: "This exquisite Kanchipuram silk saree represents the pinnacle of South Indian weaving artistry. Handwoven by master craftsmen in Kanchipuram, this saree features intricate gold zari work that has been passed down through generations.",
    features: [
      "100% Pure Mulberry Silk",
      "Authentic Gold Zari Work",
      "Traditional Temple Border Design",
      "Contrast Blouse Piece Included",
      "Handwoven by Master Artisans"
    ],
    origin: "Kanchipuram, Tamil Nadu",
    fabric: "Pure Mulberry Silk",
    care: "Dry clean only. Store in a cool, dry place away from direct sunlight."
  },
  {
    id: 2,
    name: "Royal Purple Silk",
    description: "Silver Zari with Floral Design",
    image: "url(..//img-4.png)",
    badge: "",
    fullDescription: "A magnificent silk saree that embodies rich heritage and elegance. The intricate silver zari work creates beautiful floral patterns that shimmer with every movement.",
    features: [
      "Premium Quality Silk",
      "Silver Zari Floral Motifs",
      "Traditional Brocade Work",
      "Rich Purple Color",
      "Heritage Weaving Technique"
    ],
    origin: "South India",
    fabric: "Premium Silk",
    care: "Dry clean recommended. Avoid direct contact with perfumes and deodorants."
  },
  {
    id: 3,
    name: "Bridal Collection",
    description: "Maroon with Heavy Gold Work",
    image: "url(..//img-5.png)",
    badge: "New Arrival",
    fullDescription: "An opulent bridal saree designed for the most special day of your life. This masterpiece features heavy gold work and intricate embellishments that make it perfect for weddings and grand celebrations.",
    features: [
      "Heavy Gold Embroidery",
      "Bridal Maroon Color",
      "Stone and Bead Work",
      "Designer Blouse Piece",
      "Premium Silk Quality"
    ],
    origin: "Handcrafted in India",
    fabric: "Premium Silk with Embellishments",
    care: "Professional dry cleaning only. Handle with care due to heavy embellishments."
  },
  {
    id: 4,
    name: "Peacock Motif Silk",
    description: "Teal Blue with Traditional Design",
    image: "url(..//img-6.png)",
    badge: "",
    fullDescription: "A stunning silk saree featuring traditional peacock motifs that symbolize grace and beauty. The teal blue color combined with gold accents creates a mesmerizing visual appeal.",
    features: [
      "Traditional Peacock Motifs",
      "Teal Blue Base Color",
      "Gold Accent Details",
      "Soft Silk Texture",
      "Cultural Significance"
    ],
    origin: "South India",
    fabric: "Soft Silk",
    care: "Gentle dry clean. Store with muslin cloth to prevent color transfer."
  },
];

export const ProductGallerySection = (): JSX.Element => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleBuyNow = (productName: string) => {
    const message = `Hi! I'm interested in buying the ${productName}. Could you please provide more details?`;
    const phoneNumber = "+919969988999"; // Replace with your actual phone number
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleViewAllCollections = () => {
    navigate('/collections');
  };

  return (
    <section className="w-full bg-white py-8 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-bold text-5xl sm:text-6xl text-[#483d8b] mb-4 sm:mb-6 font-sans">
            Our Most Popular Sarees
          </h2>
          <p className="text-lg sm:text-xl text-[#333333] max-w-2xl mx-auto font-sans">
            Discover our bestselling silk sarees, each piece showcasing
            exquisite craftsmanship and timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="rounded-lg overflow-hidden shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] border-0 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
              onClick={() => handleProductClick(product)}
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
                <h3 className="font-normal text-xl sm:text-2xl text-[#483d8b] mb-2 font-sans line-clamp-1 text-center">
                  {product.name}
                </h3>
                <p className="text-lg sm:text-xl text-[#333333] mb-4 font-sans line-clamp-2 text-center">
                  {product.description}
                </p>
                <div className="flex justify-center">
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuyNow(product.name);
                    }}
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
          <Button 
            onClick={handleViewAllCollections}
            className="bg-[#c1272d] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-md hover:bg-[#a11f25] font-sans text-lg sm:text-xl w-full sm:w-auto"
          >
            View All Collections
          </Button>
        </div>

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};