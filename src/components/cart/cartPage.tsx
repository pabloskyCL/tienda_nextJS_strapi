'use client'
import { useCart } from "@/hooks/use-cart";
import CartProductList from "./CartProductList";
import CartSummary from "./cartSummary";


export default function CartPage() {
    const { removeAll } = useCart();
    return (
        <div className="max-w-7xl h-fit mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrito de compras</h1>
            <button className="text font-bold bg-red-600 p-2 rounded-lg hover:bg-red-500" onClick={removeAll}>Limpiar Carrito</button>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <CartProductList />
                </div>
                <div>
                    <CartSummary />
                </div>
            </div>
        </div>
    )
}