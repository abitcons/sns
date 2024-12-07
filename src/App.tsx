import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CustomerSuccess from "./pages/customer-success"; // Corrected import for the main customer success page
import CaseStudyPage from "./pages/case-study-page"; // Import for individual case study pages
import Solutions from "./pages/Solutions";
import Careers from "./pages/Careers";
import News from "./pages/News";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/customer-success"
                element={<CustomerSuccess />}
              />{" "}
              {/* Main Customer Success Page */}
              <Route
                path="/customer-success/:id"
                element={<CaseStudyPage />}
              />{" "}
              {/* Individual Case Study Page */}
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/news" element={<News />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
