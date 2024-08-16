import { useEffect, useState } from "react";
import { Query } from "./Pagination";
import axios from "axios";
import useProductQuery from "../contexts/ProductQueryProvider";

const Controller = () => {
  const [serverQuery, setServerQuery] = useState<Query>();
  useEffect(() => {
    axios
      .get("/products/query")
      .then((response) => {
        setServerQuery(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const { query, setQuery } = useProductQuery();

  if (!serverQuery) {
    return null;
  }

  return (
    <form className="flex w-full flex-wrap gap-5 my-10 mx-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="searchName">Search</label>
        <input
          type="text"
          id="searchName"
          className="input input-bordered"
          onChange={(e) => setQuery({ ...query, searchName: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          className="select select-bordered"
          value={query.category}
          onChange={(e) => setQuery({ ...query, category: e.target.value })}
        >
          <option value="">All</option>
          {serverQuery?.uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="brandName">Brand</label>
        <select
          id="brandName"
          className="select select-bordered"
          value={query.brandName}
          onChange={(e) => setQuery({ ...query, brandName: e.target.value })}
        >
          <option value="">All</option>
          {serverQuery?.uniqueBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Controller;
