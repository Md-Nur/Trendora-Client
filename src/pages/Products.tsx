import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import Pagination from "../components/Pagination";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Controller from "../components/Controller";
import useProductQuery from "../contexts/ProductQueryProvider";

interface product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  brandName: string;
  category: string;
}

const Products = () => {
  const [products, setProducts] = useState<product[]>();
  const location = useLocation();
  const currentPage = parseInt(location.search.split("=")[1] || "1");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { query } = useProductQuery();
  const [pageList, setPageList] = useState<number[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `/products?page=${currentPage}?searchName=${query.searchName}&category=${query.category}&brandName=${query.brandName}`
      )
      .then((response) => {
        setProducts(response.data.products);
        setPageList(response.data.pageList);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage, query]);

  if (!products) {
    return (
      <div className="w-full my-20 flex justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return (
    <>
      <CardContainer
        title="All Products"
        isLoading={isLoading}
        cards={products}
      >
        <Controller />
      </CardContainer>
      <Pagination pageList={pageList} />
    </>
  );
};

export default Products;
