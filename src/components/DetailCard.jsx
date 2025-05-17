import React from "react";



import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";



const DetailCard = ({
  title,
  author,
  image,
  category,
  language,
  price,
  stock,
  publisher,
}) => {
  return (
    <Card className="w-full max-w-4xl p-4 font-sans">
      <CardContent className="flex gap-6">
        {/* Left: Optimized Image */}
        {image && (
          <div className="w-1/3">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        )}

        {/* Right: Details */}
        <div className="w-2/3 flex flex-col justify-between">
          <div className="space-y-1 text-gray-800">
            <CardTitle className="text-2xl font-semibold">Title: {title}</CardTitle>
            <CardDescription>Author: {author}</CardDescription>
            <CardDescription>Category: {category}</CardDescription>
            <CardDescription>Price: {price}</CardDescription>
            <CardDescription>Stock: {stock}</CardDescription>
            <CardDescription>Language: {language}</CardDescription>
            <CardDescription>Publisher: {publisher}</CardDescription>
          </div>
        </div>
      </CardContent>

      {/* Bottom: Add to Cart Button */}
      <div className="px-6 pb-4 pt-2">
        <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-base font-medium">
          Add to Cart
        </button>
      </div>
    </Card>
  );
};

export default DetailCard;
