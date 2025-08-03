import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export const NavigationSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "#", position: "left-0" },
    { label: "About Us", href: "#aboutUs", position: "left-[149px]" },
    { label: "Services", href: "#", position: "left-[251px]" },
    { label: "Reviews", href: "#", position: "left-[350px]" },
    { label: "Contact", href: "#contactUs", position: "left-[446px]" },
  ];

  return (
    <header className="w-full bg-white shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a]">
      <div className="mx-auto max-w-[1280px] px-4 flex flex-col">
        <div className="h-[88px] flex items-center justify-between transition-all duration-300 hover:shadow-lg animate-slide-in-left">
          {/* Logo */}
          <div className="h-16">
            <img
              src="/logo.png"
              alt="Sree Kamakshi Silks Logo"
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Hamburger Menu Button (visible on mobile/tablet) */}
          <button
            className="lg:hidden p-2 transition-transform duration-200 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#483d8b]" />
            ) : (
              <Menu className="h-6 w-6 text-[#483d8b]" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-8">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="font-medium text-[#483d8b] text-lg leading-5 transition-all duration-200 hover:text-[#c1272d] font-sans"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Shop Now button */}
            <Button className="ml-8 bg-[#c1272d] text-white rounded-md h-10 px-6 font-normal text-lg transition-all duration-200 hover:bg-[#c1272d]/90 font-sans">
              Shop Now
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav className="py-4 flex flex-col gap-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-medium text-[#483d8b] text-lg py-2 px-4 hover:bg-[#483d8b]/10 rounded-md transition-all duration-200 font-sans"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-[#c1272d] text-white rounded-md h-10 px-6 font-normal text-lg transition-all duration-200 hover:bg-[#c1272d]/90 font-sans">
                Shop Now
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
