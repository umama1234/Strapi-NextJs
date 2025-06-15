'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-serif text-[#0B2614]">
                        Decor<span className="text-[#bada55]">Hub</span>
                    </Link>


                    {/* Cart Icon */}
                    <div className="flex items-center space-x-4">
                        <Link href="/cart" className="text-[#0B2614] hover:text-[#bada55] transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}