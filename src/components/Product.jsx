import { useLocation } from "react-router-dom";
import dataProducts from "../data/products.json";

const Product = ({ sortValue, checkboxValue }) => {
  const { pathname } = useLocation();
  const id = pathname.split("-")[1];
  return (
    <>
      {dataProducts.products
        .filter((product) => product.storeId === parseInt(id))
        .sort((productA, productB) =>
          productA[sortValue] >= productB[sortValue] ? 11 : -11
        )
        .filter((product) =>
          product.toppings.toLowerCase().includes(checkboxValue.toLowerCase())
        )
        .map((product) => {
          return (
            <div key={product.id} className="product">
              <h3 style={{ fontWeight: 300 }}>{product.id}</h3>
              <h3>{product.name}</h3>
              <hr />
              <p>
                Toppings:
                <span style={{ fontWeight: 300, color: "black" }}>
                  {product.toppings}
                </span>
              </p>
              <div className="trending">
                {product.trending && <button>Trending</button>}
                <h3 className="price">{`${product.price}$`}</h3>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Product;
