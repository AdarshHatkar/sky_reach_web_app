import { createFileRoute } from "@tanstack/react-router";
import { Spinner } from "@heroui/react";

import productImage from "@assets/images/product.jpg";

export const Route = createFileRoute("/chimni/")({
    component: ChimniPage,
});

function ChimniPage() {
    return (
        <>
            <div>
                <h1 className="text-red-500">Appu</h1>
                <Spinner color="warning" label="Loading..." />
                <hr />
                <ProductCard />
            </div>
        </>
    );
}

function ProductCard() {
    const product = {
        image: productImage,
        name: "Sample Product",
        description: "This is a sample product description.",
        price: 999,
    };

    return (
        <div className="max-w-sm p-4 overflow-hidden bg-white border border-gray-200 shadow-lg rounded-2xl">
            <img src={product.image} alt={product.name} className="object-cover w-full h-48 rounded-lg" />
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-blue-600">₹{product.price}</span>
                    <button className="px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
