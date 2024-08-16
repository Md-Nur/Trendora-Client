import { createContext, useContext, useState } from "react";

const ProductQueryContext = createContext({
  query: {
    searchName: "",
    category: "",
    brandName: "",
  },
  setQuery: (query: any) => {},
});

const ProductQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState({
    searchName: "",
    category: "",
    brandName: "",
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
