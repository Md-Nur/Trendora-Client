import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import Pagination from "../components/Pagination";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `/products?page=${currentPage}&search=${query.searchName}&category=${query.category}&brandName=${query.brandName}`
      )
      .then((response) => {
        setProducts(response.data.products);
        setPageList(response.data.pageList);
        if (!pageList || pageList.length === 0 || pageList[0] === 0) {
          navigate(`/products?page=1`);
        } else if (currentPage > pageList.length) {
          navigate(`/products?page=${response.data.pageList.length}`);
        }
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
  } else if (products.length === 0) {
    return (
      <div className="w-full my-20 flex justify-center flex-col px-5">
        <Controller />
        <h1 className="text-2xl text-center">No products found</h1>
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
