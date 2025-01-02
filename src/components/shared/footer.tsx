import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">LUXE</h3>
                        <p className="text-sm">
                            Discover our curated collection of luxury accessories, watches, and eyewear.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-sm hover:text-white">Home</Link></li>
                            <li><Link href="/shop" className="text-sm hover:text-white">Shop</Link></li>
                            <li><Link href="/collections" className="text-sm hover:text-white">Collections</Link></li>
                            <li><Link href="/about" className="text-sm hover:text-white">About</Link></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Help</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm hover:text-white">FAQs</a></li>
                            <li><a href="#" className="text-sm hover:text-white">Shipping Info</a></li>
                            <li><a href="#" className="text-sm hover:text-white">Returns</a></li>
                            <li><a href="#" className="text-sm hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Stay Updated</h3>
                        <p className="text-sm mb-4">Subscribe to get special offers and updates.</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 text-gray-900 bg-white rounded-md"
                            />
                            <button className="w-full px-3 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} LUXE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}