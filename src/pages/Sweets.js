import { useContext } from "react";
import { sweetsList } from "../data/menuItems";
import { CartContext } from "../components/CartProvider";
import "../styles/sweet.css";
function SweetCard({ sweet }) {
  const { addToCart, removeFromCart, cartItems = [] } = useContext(CartContext);

 
  const quantity = cartItems.filter((item) => item.id === sweet.id).length;

  const handleIncrease = () => {
    addToCart(sweet);
  };

  const handleDecrease = () => {
    if (quantity > 0 && removeFromCart) {
      
      const itemIndex = cartItems.findIndex((item) => item.id === sweet.id);
     
        removeFromCart(itemIndex);
      
    }
  };

  return (
    <div className="menu-card">
      <img src={sweet.image} alt={sweet.name} className="menu-image"/>

      <div className="menu-details"> 
        <h2 className="item-name">{sweet.name}</h2>
        <p className="item-price">${sweet.price}</p>

        <div className="quantity-controls">
          <button className="qty-btn" onClick={handleDecrease}>-</button>
          <span className="qty-number">{quantity}</span>
          <button className="qty-btn" onClick={handleIncrease}>+</button>
        </div>
      </div>
    </div>
  );
}

export default function Sweets() {
  const { cartItems = [], clearCart, removeFromCart } = useContext(CartContext); 

  const handleSubmitOrder = () => {
  
    if (!cartItems || cartItems.length === 0) {
      alert("Please add some sweets to your order first! 🧁");
      return;
    }

  
    alert("Success! Your order has been received. 🥳");

    clearCart();
  };

  return (
    <div className="menu-page-container">
      <div className="menu-header-flex">
        <h1 className="page-title">Our Sweets</h1>
        <button className="submit-order-btn" onClick={handleSubmitOrder}>
          Submit Order
        </button>
      </div>
      
      <div className="menu-grid">
        {sweetsList.map((sweet) => (
          <SweetCard key={sweet.id} sweet={sweet} />
        ))}
      </div>
    </div>
  );
}