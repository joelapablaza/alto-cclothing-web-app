import { useContext } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { addItemToCart, subtractItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const addOne = () => addItemToCart(cartItem);
  const subtractOne = () => subtractItemToCart(cartItem);
  const removeOne = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${imageUrl}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={subtractOne}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addOne}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeOne}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
