import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Setting } from "../../pages/Settings";
import { History } from "../../pages/History";
import { NotFound } from "../../pages/Not Found";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
