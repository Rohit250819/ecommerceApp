import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemID, size) => {

    if(!size){
      toast.error('Select product size')
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemID]) {
      if (cartData[itemID][size]) cartData[itemID][size] += 1;
      else cartData[itemID][size] = 1;
    } else {
      cartData[itemID] = {};
      cartData[itemID][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () =>{
    let totalCount = 0;
    for(const productId in cartItems){
      for(const size in cartItems[productId]){
        const qty = cartItems[productId][size];
        if(typeof qty === 'number' && qty > 0)
            totalCount += qty;
      }
    }

    return totalCount;
  }

  const totalCartAmount = () => {
    let totalAmount = 0;
    for(const productId in cartItems){
        let productInfo = products.find((product)=> product._id === productId)
      for(const size in cartItems[productId]){
        const qty = cartItems[productId][size];
        if(typeof qty === 'number' && qty > 0){
          totalAmount += qty * productInfo.price;
        }
      }
    }

    return totalAmount;
  }

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    totalCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
