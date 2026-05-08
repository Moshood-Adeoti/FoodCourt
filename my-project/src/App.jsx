import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar.jsx";
import LandingPage from "./pages/LandingPage.jsx"; // ← use LandingPage for "/"
import AboutFC from "./pages/AboutFC.jsx";
import Product from "./pages/Product.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import Feedback from "./pages/Feedback.jsx";
import FAQs from "./pages/FAQs.jsx";
import Blog from "./pages/Blog.jsx";
import Careers from "./pages/Careers.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* Navbar lives here ONCE, outside Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />  {/* ← fixed */}
        <Route path="/about" element={<AboutFC />} />
        <Route path="/product" element={<Product />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;