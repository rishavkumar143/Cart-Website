import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, [])

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    localStorage.setItem("cartCount", updatedCart.length.toString());
  };

  const increaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const decreaseQty = (id) => {
    const updated = cartItems
      .map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={styles["cart-page"]}>
      <Navbar />

      <div className={styles["cart-container"]}>
        <h1 className={styles["cart-title"]}> Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className={styles["empty-state"]}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
            />
            <h2>Your cart is empty!</h2>
            <p>Looks like you haven’t added any items yet.</p>
            <button
              className={styles["shop-now-btn"]}
              onClick={() => (window.location.href = "/")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className={styles["cart-list"]}>
              {cartItems.map((item) => (
                <div className={styles["cart-card"]} key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <div className={styles["cart-details"]}>
                    <h3>{item.title}</h3>
                    <p className={styles["price"]}>${item.price.toFixed(2)}</p>

                    <div className={styles["quantity"]}>
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>

                    <p className={styles["subtotal"]}>
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      className={styles["remove-btn"]}
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles["cart-summary"]}>
              <h3>
                Total: <span>${total.toFixed(2)}</span>
              </h3>
              <button className={styles["checkout-btn"]}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
