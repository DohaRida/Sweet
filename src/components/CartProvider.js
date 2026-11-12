import { createContext, useState} from "react";
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
