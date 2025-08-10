import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { ProductModal } from "../../components/ProductModal";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  badge?: string;
  category: string;
  fullDescription?: string;
  features?: string[];
  origin?: string;
  fabric?: string;
  care?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Traditional Kanchipuram Silk",
    description: "Pure Silk with Gold Zari Border",
    image: "url(../img-3.png)",
    badge: "Bestseller",
    category: "Kanchipuram",
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
    name: "Royal Banarasi Silk",
    description: "Silver Zari with Floral Design",
    image: "url(../img-4.png)",
    category: "Banarasi",
    fullDescription: "A magnificent Banarasi silk saree that embodies the rich heritage of Varanasi's weaving tradition. The intricate silver zari work creates beautiful floral patterns that shimmer with every movement.",
    features: [
      "Pure Banarasi Silk",
      "Silver Zari Floral Motifs",
      "Traditional Brocade Work",
      "Rich Color Combination",
      "Heritage Weaving Technique"
    ],
    origin: "Varanasi, Uttar Pradesh",
    fabric: "Pure Banarasi Silk",
    care: "Dry clean recommended. Avoid direct contact with perfumes and deodorants."
  },
  {
    id: 3,
    name: "Bridal Collection Masterpiece",
    description: "Maroon with Heavy Gold Work",
    image: "url(../img-5.png)",
    badge: "New Arrival",
    category: "Bridal",
    fullDescription: "An opulent bridal saree designed for the most special day of your life. This masterpiece features heavy gold work and intricate embellishments that make it perfect for weddings and grand celebrations.",
    features: [
      "Heavy Gold Embroidery",
      "Bridal Red Color",
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
    image: "url(../img-6.png)",
    category: "Traditional",
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
  {
    id: 5,
    name: "Mysore Silk Elegance",
    description: "Pure Mysore Silk with Gold Border",
    image: "url(../img-3.png)",
    category: "Mysore",
    fullDescription: "Experience the luxury of authentic Mysore silk, known for its lustrous finish and smooth texture. This saree features a classic gold border that adds elegance to any occasion.",
    features: [
      "100% Pure Mysore Silk",
      "Lustrous Finish",
      "Classic Gold Border",
      "Smooth Texture",
      "Traditional Craftsmanship"
    ],
    origin: "Mysore, Karnataka",
    fabric: "Pure Mysore Silk",
    care: "Dry clean only. Iron on low heat with a cloth barrier."
  },
  {
    id: 6,
    name: "Patola Heritage Silk",
    description: "Double Ikat Weave Technique",
    image: "url(../img-4.png)",
    badge: "Heritage",
    category: "Patola",
    fullDescription: "A rare and precious Patola silk saree created using the ancient double ikat weaving technique. Each saree takes months to complete and represents the pinnacle of textile artistry.",
    features: [
      "Double Ikat Weave",
      "Geometric Patterns",
      "Natural Dyes Used",
      "Months of Craftsmanship",
      "Museum Quality Piece"
    ],
    origin: "Patan, Gujarat",
    fabric: "Pure Silk with Natural Dyes",
    care: "Museum-quality care required. Professional conservation cleaning only."
  },
  {
    id: 7,
    name: "Chanderi Silk Beauty",
    description: "Lightweight with Gold Motifs",
    image: "url(../img-5.png)",
    category: "Chanderi",
    fullDescription: "A beautiful Chanderi silk saree that combines comfort with elegance. The lightweight fabric makes it perfect for long occasions while the gold motifs add a touch of glamour.",
    features: [
      "Lightweight Chanderi Silk",
      "Gold Motif Work",
      "Comfortable Drape",
      "Elegant Design",
      "Perfect for Long Events"
    ],
    origin: "Chanderi, Madhya Pradesh",
    fabric: "Chanderi Silk",
    care: "Gentle hand wash or dry clean. Air dry in shade."
  },
  {
    id: 8,
    name: "Tussar Silk Natural",
    description: "Eco-friendly Natural Tussar",
    image: "url(../img-6.png)",
    category: "Tussar",
    fullDescription: "An eco-friendly Tussar silk saree that showcases the natural beauty of wild silk. The organic texture and earthy tones make it perfect for those who appreciate sustainable fashion.",
    features: [
      "100% Natural Tussar Silk",
      "Eco-friendly Production",
      "Organic Texture",
      "Earthy Color Palette",
      "Sustainable Fashion"
    ],
    origin: "Jharkhand & Bihar",
    fabric: "Wild Tussar Silk",
    care: "Gentle wash with mild detergent. Avoid harsh chemicals."
  },
  {
    id: 9,
    name: "Uppada Silk Tradition",
    description: "Jamdani Weave with Silver",
    image: "url(../img-3.png)",
    category: "Uppada",
    fullDescription: "An exquisite Uppada silk saree featuring the traditional Jamdani weave technique. The silver work creates beautiful patterns that reflect the rich textile heritage of Andhra Pradesh.",
    features: [
      "Traditional Jamdani Weave",
      "Silver Thread Work",
      "Uppada Silk Quality",
      "Heritage Technique",
      "Andhra Pradesh Craft"
    ],
    origin: "Uppada, Andhra Pradesh",
    fabric: "Uppada Silk",
    care: "Dry clean recommended. Store in breathable fabric bags."
  },
  {
    id: 10,
    name: "Pochampally Ikat Silk",
    description: "Traditional Ikat Patterns",
    image: "url(../img-4.png)",
    category: "Pochampally",
    fullDescription: "A stunning Pochampally silk saree showcasing the famous ikat weaving technique. The geometric patterns and vibrant colors represent the artistic excellence of Telangana's weavers.",
    features: [
      "Traditional Ikat Technique",
      "Geometric Patterns",
      "Vibrant Color Combinations",
      "Pochampally Craft",
      "UNESCO Recognition"
    ],
    origin: "Pochampally, Telangana",
    fabric: "Pochampally Silk",
    care: "Dry clean preferred. Avoid prolonged exposure to sunlight."
  },
  {
    id: 11,
    name: "Designer Fusion Silk",
    description: "Contemporary Design with Traditional Silk",
    image: "url(../img-5.png)",
    badge: "Designer",
    category: "Contemporary",
    fullDescription: "A modern interpretation of traditional silk sarees, this designer piece combines contemporary aesthetics with classic silk quality. Perfect for the modern woman who appreciates tradition.",
    features: [
      "Contemporary Design",
      "Traditional Silk Base",
      "Modern Color Palette",
      "Fusion Aesthetics",
      "Designer Collection"
    ],
    origin: "Designer Studio, India",
    fabric: "Premium Silk Blend",
    care: "Professional dry cleaning recommended for best results."
  },
  {
    id: 12,
    name: "Festival Special Silk",
    description: "Bright Colors for Celebrations",
    image: "url(../img-6.png)",
    badge: "Festival Special",
    category: "Festival",
    fullDescription: "A vibrant silk saree designed specifically for festivals and celebrations. The bright colors and festive patterns make it perfect for adding joy to any celebration.",
    features: [
      "Festive Color Scheme",
      "Celebration Patterns",
      "Joyful Design Elements",
      "Premium Silk Quality",
      "Perfect for Festivals"
    ],
    origin: "Various Regions, India",
    fabric: "Festive Silk",
    care: "Dry clean after each use to maintain vibrancy."
  }
];

const categories = [
  "All",
  "Kanchipuram",
  "Banarasi",
  "Bridal",
  "Traditional",
  "Mysore",
  "Patola",
  "Chanderi",
  "Tussar",
  "Uppada",
  "Pochampally",
  "Contemporary",
  "Festival"
];

export const Collections = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleBuyNow = (productName: string) => {
    const message = `Hi! I'm interested in buying the ${productName}. Could you please provide more details about pricing and availability?`;
    const phoneNumber = "+919969988999";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <section className="py-16 bg-[#9370db1a]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-[#483d8b] mb-6 font-sans">
            Our Collections
          </h1>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto font-sans">
            Discover our extensive collection of authentic silk sarees from various regions of India. 
            Each piece is carefully curated to bring you the finest quality and traditional craftsmanship.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-2 text-lg font-sans ${
                  selectedCategory === category
                    ? "bg-[#483d8b] text-white hover:bg-[#3a3171]"
                    : "border-[#483d8b] text-[#483d8b] hover:bg-[#483d8b]/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="rounded-lg overflow-hidden shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] border-0 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div
                  className="h-80 relative"
                  style={{ background: `${product.image} 50% 50% / cover` }}
                >
                  {product.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#c1272d] text-white rounded-full px-3 py-1 font-normal text-sm font-sans">
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-normal text-xl text-[#483d8b] mb-2 font-sans line-clamp-1 text-center">
                    {product.name}
                  </h3>
                  <p className="text-lg text-[#333333] mb-4 font-sans line-clamp-2 text-center">
                    {product.description}
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBuyNow(product.name);
                      }}
                      className="w-full bg-[#483d8b] text-white rounded-md hover:bg-[#3a3171] font-sans text-lg transition-all duration-200"
                    >
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};