import Footer from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { Toaster } from "sonner";

export default function mainLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <div className="flex-1">
                {children}
            </div>
            <Toaster />
            <Footer />
        </div>
    );
}