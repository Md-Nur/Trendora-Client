import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { product } from "./Products";
import axios from "axios";
import CardContainer from "../components/CardContainer";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState<product[]>();
  useEffect(() => {
    axios
      .get("/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (!products) {
    return (
      <div className="w-full my-20 flex justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return (
    <>
      <Hero />
      <CardContainer title="Latest Products" cards={products} />
      <Link to="/products" className="btn btn-primary mx-auto">
        View All Products
      </Link>
    </>
  );
};

export default Home;
