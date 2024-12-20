
import { getHomeInfo } from "@/lib/getHomeInfo";


const { getCategories } = getHomeInfo();

const categories = await getCategories();

export const categories2 = [
    {
        name: 'Accessories',
        image: 'https://images.unsplash.com/photo-1537832816-cc1c31407c15?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'Watches',
        image: 'https://images.unsplash.com/photo-1587836677544-9d56f7f08e8d?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'Eyewear',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800'
    }
];


export function Categories() {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Categorias</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {categories.map((category: Category) => (
                        <div key={category.name} className="relative rounded-lg overflow-hidden h-64 group cursor-pointer">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}