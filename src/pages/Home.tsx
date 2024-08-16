import axios from "axios";
import { useEffect, useState } from "react";
interface product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  brandName: string;
  category: string;
}
const Home = () => {
  const [products, setProducts] = useState<product[]>();

  useEffect(() => {
    axios
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //   console.log(products);

  return (
    <div>
      <h1>Home</h1>
      <div>
        {products ? (
          products.map((product: product) => (
            <div key={product._id}>
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>{product.brandName}</p>
              <p>{product.category}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
