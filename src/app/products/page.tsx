"use client";
import { ItemList } from "@/utils/types";
import { useEffect, useState } from "react"

export default function ProductsPage() {
    const [products, setProducts] = useState<ItemList[]>([]);

    useEffect(() => {
        async function getProducts() {
            const token = localStorage.getItem("token");

            const response = await fetch(
                "https://api-teste-front-production.up.railway.app/products",
                {
                    method: "GET",
                    headers: { 
                        "Content-Type": "application/json", 
                        "Authorization": `Bearer ${token}` 
                    },
                }
            );

            const data = await response.json();
            setProducts(data.data);
        }

        getProducts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Products Page
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
                    >
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">
                            {product.title}
                        </h2>
                        <p className="text-gray-600 mb-3">{product.description}</p>
                        <span
                            className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                                product.status
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                            }`}
                        >
                            {product.status ? "Active" : "Inactive"}
                        </span>
                        <p className="text-xs text-gray-400 mt-2">
                            Created: {new Date(product.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-gray-400">
                            Updated: {new Date(product.updatedAt).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
