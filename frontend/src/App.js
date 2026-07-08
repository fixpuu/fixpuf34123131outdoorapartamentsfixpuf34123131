import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ApartmentsList from "@/pages/ApartmentsList";
import ApartmentDetail from "@/pages/ApartmentDetail";
import HostWithUs from "@/pages/HostWithUs";
import Contact from "@/pages/Contact";

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
          </Routes>
        </main>
        <Footer />
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
    </div>
  );
}

export default App;
