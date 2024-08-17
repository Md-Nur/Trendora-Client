import { createContext, useContext, useState } from "react";

const ProductQueryContext = createContext({
  query: {
    searchName: "",
    category: "",
    brandName: "",
    min: NaN,
    max: NaN,
    priceSort: "",
  },
  setQuery: (query: any) => {},
});

const ProductQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState<any>({
    searchName: "",
    category: "",
    brandName: "",
    min: 19.99,
    max: 1199.99,
    priceSort: 1,
  });

  return (
    <ProductQueryContext.Provider value={{ query, setQuery }}>
      {children}
    </ProductQueryContext.Provider>
  );
};

const useProductQuery = () => {
  return useContext(ProductQueryContext);
};

export default useProductQuery;
export { ProductQueryProvider };
