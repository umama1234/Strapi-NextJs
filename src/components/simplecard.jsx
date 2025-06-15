'use client';
import Image from 'next/image';


const SimpleCard = ({ relatedproduct }) => {

  
  const imageUrl = relatedproduct?.Image?.url 
    ? `http://localhost:1337${relatedproduct.Image.url}`
    : '/placeholder.jpg';

  return (
    <div 
      className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer"
    
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={relatedproduct.Title || 'Product Image'}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {relatedproduct.Title}
        </h3>
        <span className="text-[#bada55] font-bold">
          Rs {relatedproduct.Price}
        </span>
      </div>
    </div>
  );
};

export default SimpleCard;