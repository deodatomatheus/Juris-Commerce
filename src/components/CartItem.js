import React from "react";

const CartItem = (props) => {
  const { cartItem, cartKey } = props;

  const { product, amount } = cartItem;

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
              <span className="tag is-primary">${product.price}</span>
            </b>
            <div>{product.shortDesc}</div>
            <br></br>
            <div>
              <button
                className="button is-small is-outlined is-primary   is-pulled-right"
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: amount + 1,
                  })
                }
              >
                +
              </button>
              <button className="button is-small is-outlined is-primary   is-pulled-right">
                {`${amount} no carrinho`}
              </button>

              <button
                className="button is-small is-outlined is-primary   is-pulled-right"
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: amount - 1,
                  })
                }
              >
                -
              </button>
            </div>
          </div>

          <div
            className="media-right"
            onClick={() => props.removeFromCart(cartKey)}
          >
            <span className="delete is-large"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
