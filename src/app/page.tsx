import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/featuredProducts";
import { Navbar } from "@/components/shared/navbar";
import { Welcome } from "@/components/welcome";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Welcome />
      <Categories />
      <FeaturedProducts />
    </div>
  );
}
