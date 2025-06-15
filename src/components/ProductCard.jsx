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

console.log(imageUrl, "imageUrl");



  const handleViewDetails = (slug) => {
    if (slug) {
      router.push(`/product/${slug}`);
    } else {
      console.error('No slug available for product:', product.Title);
    }
  };





  return (
    <div className="bg-white rounded-lg shadow-lg overflow-visible hover:shadow-xl transition-shadow duration-300 relative pb-14">
      <div className="relative">
        {/* Heart Icon */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/50 backdrop-blur-sm hover:bg-white transition-colors duration-200"
        >
          <HeartIcon 
            className={`w-6 h-6 transition-colors duration-200 ${
              isLiked ? 'text-red-500 fill-red-500' : 'text-gray-600'
            }`}
          />
        </button>

        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={product.Title || 'Product Image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2 line-clamp-1 text-gray-800">
          {product.Title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
          {product.Description}
        </p>
        
        <div className="flex justify-center mb-8">
          <span className="text-2xl font-bold text-[#bada55]">
            Rs {product.Price}
          </span>
        </div>
      </div>

      {/* Half-hanging Button with more spacing */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={ ()=> handleViewDetails(product.slug)   }
          className="bg-[#bada55] hover:bg-[#a2c149] text-white px-8 py-3 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;