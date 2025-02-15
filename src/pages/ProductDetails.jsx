import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import { addToWishlist,removeFromWishlist } from "../redux/slices/wishlistSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (

    <div class="flex flex-row">
      <div class="basis-1/3">
        <img src={product.image} alt={product.title} className="w-150 h-150 object-cover" />
      </div>
      <div class="basis-2/3">
        <h2 className="text-2xl font-bold text-left">{product.title}</h2>     
        <p className="text-lg text-left ">{product.description}</p>
        <p className="text-xl font-bold  text-left ">${product.price}</p>
        <div class="flex flex-row">
                <button onClick={() => dispatch(addToCart(product))}
                className="bg-blue-500 text-white px-4 py-2 rounded">
                Add to Cart</button>

                <button onClick={() => dispatch(removeFromCart(product))}
                className="bg-blue-500 text-white px-4 py-2 rounded">
                Remove From Cart</button>
        </div>

        <div class="flex flex-row">
                <button onClick={() => dispatch(addToWishlist(product))}
                className="bg-blue-500 text-white px-4 py-2 rounded">
                Add to wishlist</button>

                <button onClick={() => dispatch(removeFromWishlist(product))}
                className="bg-blue-500 text-white px-4 py-2 rounded">
                Remove From wishlist</button>
        </div>
      

      </div>
    </div>
  );
};

export default ProductDetail;
