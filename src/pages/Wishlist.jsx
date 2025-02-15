import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { clearWishlist, removeFromWishlist } from "../redux/slices/wishlistSlice";

const Wishlist = () =>{

    const {products} = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    return(
        <div className="p-4">
              <h2 className="text-2xl font-bold">Cart</h2>
              {products.length === 0 ? (
                <p>Your wishlist is empty</p>
              ) : (
                <>
                  {products.map((item) => (
                    <div key={item.id} className="border p-4 flex justify-between">
                      <img alt={item.imageAlt}
                        src={item.image}
                        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:w-20 lg:h-20"/>
                      <p className="text-lg text-left">{item.title}</p>
                      <button onClick={() => dispatch(removeFromWishlist(item.id))} className="bg-red-500 px-2 py-1 text-white">
                        Remove
                      </button>
                    </div>
                  ))}
                  <button onClick={() => dispatch(clearWishlist())} className="bg-red-500 px-4 py-2 text-white">
                    Clear Cart
                  </button>
                </>
              )}
            </div>
    );
}

export default Wishlist;