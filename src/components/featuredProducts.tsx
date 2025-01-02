import { ArrowRight } from "lucide-react"
import { ProductCard } from "./productCard"
import { getHomeInfo } from "@/lib/getHomeInfo";

const { getFeaturedProducts } = getHomeInfo();

const { products } = await getFeaturedProducts();

export function FeaturedProducts() {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Productos destacados</h2>
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                    Ver todos <ArrowRight className="ml-2 h-4 w-4" />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    )

}