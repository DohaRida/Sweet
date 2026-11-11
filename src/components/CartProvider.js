import { createContext,useContext , useState} from "react";
export const CartContext= createContext();
export function CartProvider({children}){
  const [cartItems,setCartItems]=useState([]);

  const addToCart = (item) =>{
    setCartItems((prevItems) => [...prevItems, item]);
  };
  
  const removeFromCart = (indexToRemove) =>{
    setCartItems((prevItems) => prevItems.filter((_, index) => index !==indexToRemove));
  };
  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default function Cart(){
  const context = useContext(CartContext);
  
  if (!context){
    return <div className="cart-page-container"><p>Loading cart...</p></div>;

  }

  const { cartItems = [], removeFromCart}= context;
  const totalPrice = cartItems.reduce((total, item) => total + (item.price || 0), 0);


  return(
    <div className="cart-page-container">
      <h1 className="page-title">Your Order</h1>
      {cartItems.length===0 ? (<p className="empty-cart-message">Your did not order yet! Go grab something sweet!</p>
      ) : ( 
        <div className="cart-content">
          <div className="cart-items-list">
            {cartItems.map((item,index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image"/>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                  </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2> Total:${totalPrice}</h2>
            <button className="checkout-btn">Checkout</button>
          </div>
          </div>
      ) } 
   
    </div>
  );
}