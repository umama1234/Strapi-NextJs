'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SimpleCard from './simplecard';

const DetailCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [relatedProduct, setRelatedProduct] = useState([]);

  const imageUrl = product?.Image?.url
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.Image.url}`
    : '/placeholder.jpg';

  const handleIncrement = () => {
    if (quantity < product?.Stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      if (!product?.category?.name) return;

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[category][name][$eq]=${product.category.name}&populate=*`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();

        // Filter out the current product
        const filteredProducts = data.data.filter(
          (item) => item.id !== product.id
        );

        setRelatedProduct(filteredProducts);
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchProduct();
  }, [product]);




  
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={product?.Title || 'Product Image'}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column - Details */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="text-green-500 font-semibold">
                {product?.Stock > 0 ? `${product.Stock} in stock` : 'Out of stock'}
              </span>
            </div>

            <h1 className="text-3xl font-bold mb-4">{product.Title}</h1>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Product Details:</h2>
              <p className="text-gray-600">{product.Description}</p>
            </div>

            <div className="mb-4">
              <span className="text-2xl font-bold text-[#bada55]">
                Rs {product.Price}
              </span>
            </div>

            {product?.category && (
              <div className="mb-6">
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                  {product.category.name}
                </span>
              </div>
            )}

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={handleDecrement}
                  className="px-4 py-2 text-gray-600 hover:text-[#bada55] disabled:text-gray-300"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="px-4 py-2 text-gray-600 hover:text-[#bada55] disabled:text-gray-300"
                  disabled={quantity >= product?.Stock}
                >
                  +
                </button>
              </div>
              <button
                className="bg-[#bada55] hover:bg-[#a2c149] text-white px-8 py-3 rounded-lg transition-all duration-200"
                disabled={!product?.Stock}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center">Related Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {relatedProduct.map((relatedproduct) => (
          <SimpleCard key={relatedproduct.id} relatedproduct={relatedproduct} />
        ))}
      </div>
    </>
  );
};

export default DetailCard;
