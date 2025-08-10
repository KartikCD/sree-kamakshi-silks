import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

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

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const handleBuyNow = () => {
    if (product) {
      const message = `Hi! I'm interested in buying the ${product.name}. Could you please provide more details about pricing and availability?`;
      const phoneNumber = "+919969988999";
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto font-sans">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#483d8b] font-sans">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative">
            <div
              className="w-full h-96 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: product.image }}
            />
            {product.badge && (
              <div className="absolute top-4 right-4">
                <span className="bg-[#c1272d] text-white px-3 py-1 rounded-full text-sm font-sans">
                  {product.badge}
                </span>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <p className="text-lg text-[#333333] font-sans">
              {product.description}
            </p>

            {product.fullDescription && (
              <div>
                <h3 className="text-xl font-bold text-[#483d8b] mb-2 font-sans">
                  Description
                </h3>
                <p className="text-lg text-[#333333] font-sans leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>
            )}

            {product.features && (
              <div>
                <h3 className="text-xl font-bold text-[#483d8b] mb-2 font-sans">
                  Features
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-lg text-[#333333] font-sans">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {product.origin && (
                <div>
                  <h4 className="font-bold text-[#483d8b] font-sans">Origin:</h4>
                  <p className="text-lg text-[#333333] font-sans">{product.origin}</p>
                </div>
              )}
              {product.fabric && (
                <div>
                  <h4 className="font-bold text-[#483d8b] font-sans">Fabric:</h4>
                  <p className="text-lg text-[#333333] font-sans">{product.fabric}</p>
                </div>
              )}
            </div>

            {product.care && (
              <div>
                <h3 className="text-xl font-bold text-[#483d8b] mb-2 font-sans">
                  Care Instructions
                </h3>
                <p className="text-lg text-[#333333] font-sans">{product.care}</p>
              </div>
            )}

            <div className="pt-6">
              <Button
                onClick={handleBuyNow}
                className="w-full bg-[#c1272d] hover:bg-[#a11f25] text-white text-xl py-3 font-sans"
              >
                Buy Now via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};