import React from "react";
import withContext from "../withContext";
import CartItem from "./CartItem";
import emailjs from "emailjs-com";

const Cart = (props) => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});

  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Meu Carrinho</h4>
        </div>
      </div>
      <br />
      <div className="container">
        {cartKeys.length ? (
          <div className="column columns is-multiline">
            {cartKeys.map((key) => (
              <CartItem
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
                addToCart={props.context.addToCart}
              />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  onClick={props.context.clearCart}
                  className="button is-warning "
                >
                  Limpar carrinho
                </button>{" "}
                <button
                  className="button is-success"
                  onClick={() => {
                    var msg_email = "";
                    var total = 0;
                    for (var k in cart) {
                      if (cart[k].amount > 0) {
                        msg_email +=
                          cart[k].amount +
                          "x  " +
                          k +
                          " = " +
                          cart[k].product.price * cart[k].amount +
                          "<br>";
                        total += cart[k].amount * cart[k].product.price;
                      }
                    }
                    msg_email += "<br><b>Valor total: " + total + "</b><br>";
                    var d = new Date();
                    msg_email +=
                      "<br> Identificador da sua compra: " +
                      d.getTime() +
                      "<br>";

                    let user = localStorage.getItem("user");
                    user = user ? JSON.parse(user) : null;
                    if (user == null) {
                      props.history.push("/login");
                    } else {
                      var templateParams = {
                        to_email: user.email,
                        message: msg_email,
                      };

                      if (total > 0) {
                        emailjs
                          .send(
                            "service_xra8jwd",
                            "template_7mnthhm",
                            templateParams,
                            "user_yxpyiLztFuc3BU8AtmEuH"
                          )
                          .then(
                            function (response) {
                              props.context.checkout();
                              console.log(
                                "SUCCESS!",
                                response.status,
                                response.text
                              );
                            },
                            function (error) {
                              console.log("FAILED...", error);
                            }
                          );
                      }
                      props.history.push("/products");
                    }
                  }}
                >
                  Confirmar Compra
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title has-text-grey-light">
              Seu carrinho está vazio!
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default withContext(Cart);
