import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { ConsentProvider } from "@/context/ConsentContext";
import Home from "@/pages/Home";
import ApartmentsList from "@/pages/ApartmentsList";
import ApartmentDetail from "@/pages/ApartmentDetail";
import HostWithUs from "@/pages/HostWithUs";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiePolicy from "@/pages/CookiePolicy";
import LegalNotes from "@/pages/LegalNotes";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <ConsentProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/appartamenti" element={<ApartmentsList />} />
              <Route path="/appartamenti/:id" element={<ApartmentDetail />} />
              <Route path="/affidaci-il-tuo-immobile" element={<HostWithUs />} />
              <Route path="/contatti" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/note-legali" element={<LegalNotes />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
          <Toaster
            position="bottom-right"
            theme="dark"
            toastOptions={{
              style: {
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                borderRadius: 0,
                fontFamily: "Manrope, sans-serif",
              },
            }}
          />
        </BrowserRouter>
      </ConsentProvider>
    </div>
  );
}

export default App;
