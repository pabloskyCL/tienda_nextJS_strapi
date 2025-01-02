import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/featuredProducts";
import { Welcome } from "@/components/welcome";

export default function Home() {
    return (
        <>
            <Welcome />
            <FeaturedProducts />
            <Categories />
        </>
    );
}