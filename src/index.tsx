import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";
import { Frame } from "./screens/Frame";
import { Collections } from "./screens/Collections/Collections";

const AppRouter = (): JSX.Element => {
  const [route, setRoute] = useState<string>(window.location.hash || "#home");

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || "#home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (route === "#collections") {
    return <Collections />;
  }
  return <Frame />;
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
