import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetStarted = () => {
    navigate("/products");
  };

  return (
    <>
      <Navbar />

      {/* Landing Page inside App.jsx */}
      {location.pathname === "/" && (
        <div className="background-image">
          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>
            <button onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
