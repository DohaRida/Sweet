import { useContext } from "react";
import { drinksList } from "../data/menuItems";
import { CartContext } from "../components/CartProvider";
import "../styles/drinks.css";


function DrinkCard({ drink }) {
  const { addToCart, removeFromCart, cartItems = [] } = useContext(CartContext);

  
  const quantity = cartItems.filter((item) => item.id === drink.id).length;

  const handleIncrease = () => {
    addToCart(drink);
  };

  
  const handleDecrease = () => {
    if (quantity > 0 && removeFromCart) {
      
      const itemIndex = cartItems.findIndex((item) => item.id === drink.id);
     
        removeFromCart(itemIndex);
      
    }
  };
  return (
    
    <div className="menu-card">
      <img src={drink.image} alt={drink.name} className="menu-image" />

      <div className="menu-details">
        <h2 className="item-name">{drink.name}</h2>
        <p className="item-price">${drink.price}</p>

        <div className="quantity-controls">
          <button className="qty-btn" onClick={handleDecrease}>-</button>
          <span className="qty-number">{quantity}</span>
          <button className="qty-btn" onClick={handleIncrease}>+</button>
        </div>
      </div>
    </div>
  );
}


export default function Drinks() {
  const { cartItems = [], clearCart, removeFromCart } = useContext(CartContext);

  const handleSubmitOrder = () => {
   
    if (!cartItems || cartItems.length === 0) {
      alert("Please add some drinks to your order first! ☕");
      return;
    }

  
    alert("Success! Your order has been received. 🥳");

    clearCart();
  };

  return (
    <div className="menu-page-container">
      <div className="menu-header-flex">
        <h1 className="page-title">Our Drinks</h1>
        <button className="submit-order-btn" onClick={handleSubmitOrder}>
          Submit Order
        </button>
      </div>

      <div className="menu-grid">
        {drinksList.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </div>
  );
}