import React, { useMemo, useState } from "react";
import { NavigationSection } from "../Frame/sections/NavigationSection";
import { ContactSection } from "../Frame/sections/ContactSection/ContactSection";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Example collections across categories
interface CollectionItem {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
}

const collections: CollectionItem[] = [
  { id: 101, name: "Kanchipuram Classics", category: "Kanchipuram", description: "Handwoven pure silk with rich zari borders.", image: "url(/img-3.png)", badge: "Bestseller" },
      { id: 102, name: "Banarasi Heritage", category: "Banarasi", description: "Elegant brocades and antique zari motifs.", image: "url(/img-4.png)" },
      { id: 103, name: "Bridal Grandeur", category: "Bridal", description: "Opulent ensembles curated for weddings.", image: "url(/img-5.png)", badge: "New" },
      { id: 104, name: "Contemporary Weaves", category: "Contemporary", description: "Modern colorways with traditional craft.", image: "url(/img-6.png)" },
      { id: 105, name: "Soft Silk Essentials", category: "Soft Silk", description: "Lightweight silks for everyday elegance.", image: "url(/img-3.png)" },
      { id: 106, name: "Heritage Revival", category: "Handloom", description: "Rare motifs and limited editions.", image: "url(/img-4.png)" },
];

export const Collections = (): JSX.Element => {
  const [selected, setSelected] = useState<CollectionItem | null>(null);
  const whatsappNumber = useMemo(() => "919969988999", []); // 9969988999 with country code 91

  const handleBuyNow = (productName: string) => {
    const message = `Hi! I'm interested in buying the ${productName}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col w-full bg-white border-2 border-solid border-[#ced4da]">
      <NavigationSection />
      <main className="w-full bg-white py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="text-center mb-10 sm:mb-14">
            <h1 className="font-bold text-5xl sm:text-6xl text-[#483d8b] mb-5 sm:mb-7 font-sans">All Collections</h1>
            <p className="text-lg sm:text-xl text-[#333333] max-w-3xl mx-auto font-sans">Explore collections across all saree categories available in our store.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {collections.map((item) => (
              <Card key={item.id} className="rounded-lg overflow-hidden shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] border-0 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="h-60 sm:h-72 relative cursor-pointer" style={{ background: `${item.image} 50% 50% / cover` }} onClick={() => setSelected(item)}>
                  {item.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#c1272d] text-white rounded-full px-3 py-1 font-normal text-xs sm:text-sm font-sans">{item.badge}</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-2xl text-[#483d8b] font-sans line-clamp-1">{item.name}</h3>
                    <span className="text-sm bg-[#9370db1a] text-[#483d8b] px-2 py-1 rounded-md font-sans">{item.category}</span>
                  </div>
                  <p className="text-lg sm:text-xl text-[#333333] mb-4 font-sans line-clamp-2">{item.description}</p>
                  <Button onClick={() => handleBuyNow(item.name)} className="w-full bg-[#483d8b] text-white rounded-md hover:bg-[#3a3171] font-sans text-lg sm:text-xl transition-all duration-200">Buy Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <ContactSection />

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="h-72 sm:h-96" style={{ background: `${selected.image} 50% 50% / cover` }} />
            <div className="p-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#483d8b] mb-2 font-sans">{selected.name}</h3>
              <p className="text-lg sm:text-xl text-[#333333] mb-5 font-sans">{selected.description}</p>
              <div className="flex gap-3 justify-end">
                <Button variant="outline" className="border-2 border-[#483d8b] text-[#483d8b] hover:bg-[#483d8b]/10 text-lg sm:text-xl font-sans" onClick={() => setSelected(null)}>Close</Button>
                <Button className="bg-[#c1272d] text-white text-lg sm:text-xl font-sans" onClick={() => handleBuyNow(selected.name)}>Buy Now</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};