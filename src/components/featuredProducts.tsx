import { ArrowRight } from "lucide-react"
import { ProductCard } from "./productCard"
import { getHomeInfo } from "@/lib/getHomeInfo";

// export const products = [
//     {
//       id: 1,
//       name: "Leather Crossbody Bag",
//       price: "$129.99",
//       category: "Accessories",
//       image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       id: 2,
//       name: "Minimalist Watch",
//       price: "$199.99",
//       category: "Watches",
//       image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       id: 3,
//       name: "Classic Sunglasses",
//       price: "$89.99",
//       category: "Eyewear",
//       image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       id: 4,
//       name: "Designer Wallet",
//       price: "$79.99",
//       category: "Accessories",
//       image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800"
//     }
//   ];

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