import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NavigationSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Navigation menu items data
  const navItems = [
    { label: "Collections", href: "/collections", position: "left-0" },
    { label: "About Us", href: "#aboutUs", position: "left-[251px]" },
    { label: "Services", href: "#services", position: "left-[350px]" },
    { label: "Reviews", href: "#reviews", position: "left-[446px]" },
    { label: "Contact", href: "#contactUs", position: "left-[542px]" },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      // For anchor links, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a]">
      <div className="mx-auto max-w-[1280px] px-4 flex flex-col">
        <div className="h-[88px] flex items-center justify-between transition-all duration-300 hover:shadow-lg animate-slide-in-left">
          {/* Logo */}
          <div className="h-16 cursor-pointer" onClick={() => navigate('/')}>
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
                      onClick={() => handleNavigation(item.href)}
                      className="font-medium text-[#483d8b] text-lg leading-5 transition-all duration-200 hover:text-[#c1272d] font-sans cursor-pointer"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
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
                onClick={() => handleNavigation(item.href)}
                className="font-medium text-[#483d8b] text-lg py-2 px-4 hover:bg-[#483d8b]/10 rounded-md transition-all duration-200 font-sans cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};