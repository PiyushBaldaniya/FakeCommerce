import React from "react";
import {useSelector,useDispatch} from "react-redux";
import { removeFromCart,clearCart } from "../redux/slices/cartSlice";
const Cart = () =>{

    const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return(
        <div className="p-4">
      <h2 className="text-2xl font-bold">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 flex justify-between">
              <p>{item.title} - ${item.price} x {item.quantity}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-red-500 px-2 py-1 text-white">
                Remove
              </button>
            </div>
          ))}
          <p>Total Items: {totalQuantity}</p>
          <p>Total Price: ${totalPrice}</p>
          <button onClick={() => dispatch(clearCart())} className="bg-red-500 px-4 py-2 text-white">
            Clear Cart
          </button>
        </>
      )}
    </div>
    );
}

export default Cart;