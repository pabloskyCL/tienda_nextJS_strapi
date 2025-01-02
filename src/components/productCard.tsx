"use client"
import { useCart } from "@/hooks/use-cart";
import { Heart, ShoppingCart } from "lucide-react";

export function ProductCard(product: ProductType) {

    const { addItem } = useCart();

    return (
        <div className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                />
                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white">
                    <Heart className="h-5 w-5 text-gray-600" />
                </button>
            </div>
            <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-500">{product.category}</p>
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                <button
                    className="w-full flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    onClick={() => addItem(product)}
                >
                    <ShoppingCart className="h-4 w-4" />
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}