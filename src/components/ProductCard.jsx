'use client';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();

  const imageUrl = product.Image?.url
    ? `${product.Image.url}`
    : product.Image?.formats?.thumbnail?.url
    ? `${product.Image.formats.thumbnail.url}`
    : '/placeholder.jpg';

  const handleViewDetails = (slug) => {
    if (slug) {
      router.push(`/product/${slug}`);
    } else {
      console.error('No slug available for product:', product.Title);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
        <Image
          src={imageUrl}
          alt={product.Title || 'Product Image'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />

        {/* Heart Icon - show on hover at lower right */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute bottom-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <HeartIcon
            className={`w-6 h-6 ${
              isLiked ? 'text-red-500 fill-red-500' : 'text-gray-600'
            } transition-colors duration-200`}
          />
        </button>
      </div>

      {/* Text Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1 line-clamp-1 text-gray-800">
          {product.Title}
        </h2>
        <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
          {product.Description}
        </p>

        {/* Price + View Details Side-by-Side */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#bada55]">
            Rs {product.Price}
          </span>

          <button
            onClick={() => handleViewDetails(product.slug)}
            className="px-4 py-1 bg-[#bada55] text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#a2c149] text-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
