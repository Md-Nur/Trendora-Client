import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Trendora</h1>
          <p className="py-6">
            Trendora is a E-Commerce Shop. We provide the best quality products
            for you. You can filter products by category, brand, price, and sort
            them by price or time. Find your favorite products with your budget.
          </p>
          <Link to="/products" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
