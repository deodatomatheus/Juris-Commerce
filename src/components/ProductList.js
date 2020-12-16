import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";

const ProductList = (props) => {
  const { products, cart } = props.context;

  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Nossos produtos</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                cart={cart}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                Nenhum produto encontrado!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);
