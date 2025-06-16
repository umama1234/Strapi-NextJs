'use client';
import { useEffect, useRef, useState, Suspense } from 'react';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/Herosection';
import { useRouter, useSearchParams } from 'next/navigation';

// Separate component for the product listing functionality
function ProductListContent() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const productSectionRef = useRef(null); // Ref to scroll to product section

  const handleCategoryClick = (categorySlug) => {
    if (categorySlug) {
      router.push(`/?category=${categorySlug}`);
    } else {
      router.push('/');
    }

    // Scroll to product section after routing
    setTimeout(() => {
      productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // delay to ensure route state update
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, featuredRes, categoriesRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[IsFeatured][$eq]=false`),
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[IsFeatured][$eq]=true`),
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`)
        ]);

        if (!productsRes.ok || !featuredRes.ok || !categoriesRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const [productsData, featuredData, categoriesData] = await Promise.all([
          productsRes.json(),
          featuredRes.json(),
          categoriesRes.json()
        ]);

        const allProducts = productsData.data || [];
        setProducts(allProducts);
        setFeatured(featuredData.data || []);
        setCategories(categoriesData.data || []);

        if (categoryParam) {
          const filtered = allProducts.filter(product => 
            product.category.slug === categoryParam
          );
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(allProducts);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryParam]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#bada55]"></div>
      </div>
    );
  }

  console.log(categories);
  console.log(products);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className={`px-6 py-2 rounded-full ${
              !categoryParam ? 'bg-[#bada55] text-white' : 'bg-gray-100'
            } hover:bg-[#bada55] hover:text-white transition-colors duration-200`}
            onClick={() => handleCategoryClick(null)}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full ${
                categoryParam === category.attributes?.slug ? 'bg-[#bada55] text-white' : 'bg-gray-100'
              } hover:bg-[#bada55] hover:text-white transition-colors duration-200`}
              onClick={() => handleCategoryClick(category.slug)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <HeroSection />

      {!categoryParam && (
        <>
          <h1 className="text-3xl font-bold mb-8 text-center mt-5">Featured Products</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}

      <div ref={productSectionRef}>
        <h1 className="text-3xl font-bold mb-8 text-center">
          {categoryParam 
            ? `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Products`
            : 'All Products'
          }
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500">
              No products found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Main component wrapped with Suspense
export default function Home() {
  return (
    <Suspense 
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#bada55]"></div>
        </div>
      }
    >
      <ProductListContent />
    </Suspense>
  );
}
