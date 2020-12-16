import React from "react";

const ProductItem = (props) => {
  const { product } = props;

  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={product.image} alt={product.shortDesc} />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-primary">R$ {product.price}</span>
            </b>
            <div>{product.shortDesc}</div>
            {product.stock > 0 ? (
              <small>{product.stock + " disponíveis"}</small>
            ) : (
              <small className="has-text-danger">Item esgotado</small>
            )}
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-primary   is-pulled-right"
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: 1,
                  })
                }
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
