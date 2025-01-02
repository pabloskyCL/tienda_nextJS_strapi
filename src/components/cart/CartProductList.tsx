"use client"

import { useCart } from "@/hooks/use-cart";
import { Minus, Plus, Trash2 } from "lucide-react";


export default function CartProductList() {
    const { items, removeItem } = useCart();

    return (
        <div className="space-y-4">
            {items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                            <div className="min-w-0">
                                <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                                <p className="text-sm text-gray-500">{item.category}</p>
                            </div>
                            <p className="font-medium text-gray-900 whitespace-nowrap">{item.price}</p>
                        </div>
                        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <button className="p-1 rounded-md hover:bg-gray-100">
                                    <Minus className="h-4 w-4" color="black" />
                                </button>
                                <span className="w-8 text-center text-black">1</span>
                                <button className="p-1 rounded-md hover:bg-gray-100">
                                    <Plus className="h-4 w-4" color="black" />
                                </button>
                            </div>
                            <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-700 flex items-center gap-1">
                                <Trash2 className="h-4 w-4" />
                                <span className="text-sm">Eliminar</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}