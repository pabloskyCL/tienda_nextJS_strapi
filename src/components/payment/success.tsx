'use client'
import { useCart } from "@/hooks/use-cart";
import Link from "next/link";
import { useEffect } from "react";


export default function Success() {

    const { removeAll } = useCart();

    useEffect(() => {
        removeAll();
    }, [removeAll]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-center text-gray-600">¡Gracias por tu compra!</h1>
            <p className="text-lg text-center text-gray-700">Recibirás un correo con los detalles de tu compra</p>
            <Link href="/" className="mt-4 text-blue-600 hover:text-blue-700">Volver al inicio</Link>
        </div>
    )
}