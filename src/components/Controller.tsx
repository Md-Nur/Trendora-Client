import { useEffect, useState } from "react";
import axios from "axios";
import useProductQuery from "../contexts/ProductQueryProvider";
import { FaSearch } from "react-icons/fa";

interface Query {
  pageList: number[];
  uniqueBrands: string[];
  uniqueCategories: string[];
  priceRange: {
    minPrice: number;
    maxPrice: number;
  };
}

const Controller = () => {
  const [serverQuery, setServerQuery] = useState<Query>();
  const { query, setQuery } = useProductQuery();

  useEffect(() => {
    axios
      .get("/products/query")
      .then((response) => {
        console.log(query);
        setServerQuery(response.data);
        setQuery({
          ...query,
          min: response.data?.priceRange.minPrice,
          max: response.data?.priceRange.maxPrice,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!serverQuery) {
    return null;
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full flex-wrap gap-5 my-10 mx-3"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="searchName">
          Search {query?.searchName && `(${query.searchName})`}
        </label>
        <div className="join">
          <input
            type="text"
            id="searchName"
            className="input input-bordered join-item"
            placeholder="Search by name"
            onBlur={(e) => setQuery({ ...query, searchName: e.target.value })}
          />
          <button type="submit" className="btn btn-secondary join-item">
            <FaSearch />
          </button>
        </div>
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
      <div className="join">
        <div className="flex flex-col gap-2 join-item">
          <label htmlFor="min">Min Price</label>
          <input
            type="number"
            id="min"
            className="input input-bordered"
            min={serverQuery?.priceRange.minPrice}
            max={query.max}
            step="any"
            defaultValue={serverQuery?.priceRange.minPrice}
            onBlur={(e) =>
              setQuery({ ...query, min: parseInt(e.target.value) })
            }
          />
        </div>
        <div className="flex flex-col gap-2 join-item">
          <label htmlFor="max">Max Price</label>
          <input
            type="number"
            id="max"
            className="input input-bordered"
            min={query.min}
            defaultValue={serverQuery?.priceRange.maxPrice}
            max={serverQuery?.priceRange.maxPrice}
            onBlur={(e) => setQuery({ ...query, max: e.target.value })}
            step="any"
          />
        </div>
        <div className="flex flex-col gap-2 join-item justify-end">
          <button type="submit" className="btn join-item btn-primary">
            <FaSearch />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Controller;
