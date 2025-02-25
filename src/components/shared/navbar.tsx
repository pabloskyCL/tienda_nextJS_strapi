"use client"
import { Menu, Search, User, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import Link from "next/link";

export function Navbar() {

    const { items } = useCart();
    const router = useRouter();

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Menu className="h-6 w-6 text-gray-600 sm:hidden" />
                        <span className="ml-4 text-xl font-bold text-gray-800"></span>
                    </div>

                    <div className="hidden sm:flex space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-gray-900">Inicio</Link>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Audifonos</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Categorias</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Nosotros</a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Search className="h-5 w-5 text-gray-600 cursor-pointer" />
                        <User className="h-5 w-5 text-gray-600 cursor-pointer" />
                        <div className="relative">
                            <ShoppingCart className="h-5 w-5 text-gray-600 cursor-pointer" onClick={() => router.push('/cart')} />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{items.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}