import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <img src={product.image} alt={product.title} className="w-96 h-64 object-cover" />
      <p className="text-lg">{product.description}</p>
      <p className="text-xl font-bold">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
