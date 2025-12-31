import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Achievements from "./pages/Achievements";
import Awards from "./pages/Awards";
import Vision from "./pages/Vision";
import Media from "./pages/Media";
import NotFound from "./pages/NotFound";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
};

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#F7FAF9_55%,#ffffff_100%)]">
      <ScrollToTop />
      <Navbar />

      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/media" element={<Media />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
