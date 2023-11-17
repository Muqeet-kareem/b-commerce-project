import React, { createContext, useState} from "react";
import { PRODUCTS} from "../components/products";

// context
export const ShopContext= createContext(null);
// function
const getDefaultCart = () => {
      // Returns an array of zeros with the length of the sum of the length of the PRODUCTS and PRODUCTS1 arrays.
      const cart = [];

      for (let i = 0; i < PRODUCTS.length ; i++) {
       cart[i] = 0;
      }

      return cart;
};


const Shopcontext = (props) => {
      const [cartItems, setCartItems] = useState(getDefaultCart());
      const getTotalCartAmount = () => {
            let totalAmount = 0;
            for (const item in cartItems) {
              if (cartItems[item]> 0) {
                  let itemInfo = PRODUCTS.find((product) => product.id === Number(item)) ||((product)=>
                  product.id === Number(item));
                  totalAmount += cartItems[item] * itemInfo.price;
              }
            }
            return totalAmount.toFixed(2);
            };

      const getTotalCartProducts = () => {
          let totalProducts = 0;
          for (const item in cartItems) {
            if (cartItems[item] > 0) {
                  totalProducts += cartItems[item];
            }
          }
          return totalProducts;
      };


      const addToCart = (productId) => {
        setCartItems ((prev)=>({
        ...prev,
        [productId]: prev[productId] + 1
        }));
      };

      const removeToCart = (productId) =>{
            setCartItems ((prev) =>({
             [productId]: prev[productId] - 1    
            }));
      };

      const updateCartItemCount = (newAmount, productId) => {
            setCartItems((prev)=>({
             ...prev,
             [productId]: newAmount     
            }));
      };
      const clearCart = () => {
         const updatedCartItems = {};
         for (const productId in cartItems) {
      updatedCartItems[productId] = 0;
         }
         setCartItems(updatedCartItems);
      };

      const resetCart = () => {
            setCartItems([]);
      };

      const {setSelectedProduct} = useState(null);

      const viewProductDetails = (productId) =>{
            // setSelectedProduct(productId);
      };
      const closeProductDetails = () =>{
            setSelectedProduct(null);
      };
      const contextValue = {
            cartItems,
            addToCart,
            removeToCart,
            updateCartItemCount,
            getTotalCartAmount,
            getTotalCartProducts,
            clearCart,
            resetCart,
            viewProductDetails,
            closeProductDetails,

      };
      // console.log(selectedProduct);
      console.log(cartItems);

      return (
       <ShopContext.Provider value={contextValue}>
         {props.children}
      </ShopContext.Provider>     
      );
};
export default Shopcontext


