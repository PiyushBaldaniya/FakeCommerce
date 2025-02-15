import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

  export default function Product() {

    const [products,setProduct] = useState([]);

    useEffect (() => {
        const loadProduct = async() => {
            try{
                const response = await axios.get("https://fakestoreapi.com/products");
                setProduct(response.data); 
            }
            catch(error)
            {
                console.error("Error fetching users:", error);
                return [];
            }
        
        };
        loadProduct();
       

    },[]);

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (

                <Link  key={product.id} to={`/Product/${product.id}`}>
                    <div className="group relative">
                        <img alt={product.imageAlt}
                            src={product.image}
                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"/>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700"></h3>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        </div>
                    </div>                
                </Link>

            ))}
          </div>
        </div>
      </div>
    )
  }
  