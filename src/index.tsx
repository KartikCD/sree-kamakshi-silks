import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Frame } from "./screens/Frame";
import { Collections } from "./screens/Collections";
import { NavigationSection } from "./screens/Frame/sections/NavigationSection";
import { ContactSection } from "./screens/Frame/sections/ContactSection/ContactSection";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Frame />} />
        {/* <Route path="/collections" element={
          <div className="flex flex-col w-full bg-white border-2 border-solid border-[#ced4da]">
            <NavigationSection />
            <Collections />
            <ContactSection />
          </div>
        } /> */}
      </Routes>
    </Router>
  </StrictMode>,
);
