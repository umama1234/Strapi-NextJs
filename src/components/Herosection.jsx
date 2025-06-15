'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      {/* Main Hero Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="relative h-[500px] bg-[#0B2614] overflow-hidden w-full rounded-2xl">
          <div className="absolute inset-0 z-0 m-4">
            <Image
              src="/Home-Decor-Items-1320x743.jpg"
              alt="Home Decor Background"
              fill  
              className="object-cover brightness-110 contrast-110 saturate-150 rounded-2xl"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-30 z-10 rounded-2xl" />
        </div>

        {/* Additional Images Section */}
        <div className="w-full mt-6">
          <div className="flex gap-6">
            {/* First Image */}
            <div className="relative h-[400px] w-1/2">
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <Image
                  src="/images.jpg"
                  alt="Decorative Image 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            {/* Second Image */}
            <div className="relative h-[400px] w-1/2">
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <Image
                  src="/download.jpg"
                  alt="Decorative Image 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}